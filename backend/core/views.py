import logging

from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.throttling import ScopedRateThrottle

from .models import Property, Testimonial, ListingRequest, Subscriber, ContactMessage
from .serializers import (
    PropertySerializer, TestimonialSerializer, ListingRequestSerializer,
    SubscriberSerializer, ContactMessageSerializer,
)
from .filters import PropertyFilter


logger = logging.getLogger(__name__)


def _header_safe(value):
    """Collapse all whitespace (incl. newlines) so user-supplied names can't
    inject extra headers into the email subject (BadHeaderError)."""
    return " ".join(str(value or "").split())


def _send_lead_email(subject, body, reply_to=None):
    """Notify the agency about a new lead. Best-effort — never break the
    form submission if SMTP fails, because the lead is already in the DB."""
    recipient = getattr(settings, 'LEADS_NOTIFY_EMAIL', '') or getattr(settings, 'EMAIL_HOST_USER', '')
    from_email = getattr(settings, 'DEFAULT_FROM_EMAIL', '') or recipient
    if not recipient or not from_email:
        logger.warning("Lead email not sent: recipient/from not configured")
        return
    try:
        msg = EmailMessage(
            subject=subject,
            body=body,
            from_email=from_email,
            to=[recipient],
            reply_to=[reply_to] if reply_to else None,
        )
        msg.send(fail_silently=False)
    except Exception:
        logger.exception("Failed to send lead notification email")


class PropertyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Property.objects.filter(is_published=True).prefetch_related("images")
    serializer_class = PropertySerializer
    filterset_class = PropertyFilter
    lookup_field = "slug"
    lookup_value_regex = "[-a-zA-Z0-9_]+"

    @action(detail=True, methods=["get"])
    def similar(self, request, slug=None):
        prop = self.get_object()
        qs = (
            Property.objects.filter(is_published=True, type=prop.type)
            .exclude(pk=prop.pk)
            .prefetch_related("images")
            .order_by("-featured", "-created_at")[:3]
        )
        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.filter(is_published=True)
    serializer_class = TestimonialSerializer
    filterset_fields = ["language"]


class ListingRequestViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ListingRequest.objects.all()
    serializer_class = ListingRequestSerializer
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "leads"

    def perform_create(self, serializer):
        obj = serializer.save()
        price = f"€{obj.price:,.0f}".replace(",", " ") if obj.price else "—"
        area = f"{obj.area} m²" if obj.area else "—"
        body = (
            f"Ofertë e re prone në AS Real Estate\n"
            f"-----------------------------------\n"
            f"Emri:           {obj.first_name} {obj.last_name}\n"
            f"Email:          {obj.email}\n"
            f"Telefon:        {obj.phone}\n"
            f"Tipi i pronës:  {obj.get_property_type_display()}\n"
            f"Statusi:        {obj.get_property_status_display()}\n"
            f"Lokacioni:      {obj.location}\n"
            f"Sipërfaqja:     {area}\n"
            f"Çmimi:          {price}\n"
            f"\nPërshkrimi:\n{obj.description or '—'}\n"
            f"\nMarrë më: {obj.created_at:%Y-%m-%d %H:%M}\n"
        )
        _send_lead_email(
            subject=f"[AS Real Estate] Ofertë e re prone — {_header_safe(f'{obj.first_name} {obj.last_name}')}",
            body=body,
            reply_to=obj.email,
        )


class SubscriberViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "subscribers"


class ContactMessageViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "leads"

    def perform_create(self, serializer):
        obj = serializer.save()
        body = (
            f"Mesazh i ri kontakti në AS Real Estate\n"
            f"-----------------------------------\n"
            f"Emri:      {obj.first_name} {obj.last_name}\n"
            f"Email:     {obj.email}\n"
            f"Telefon:   {obj.phone or '—'}\n"
            f"Interesi:  {obj.get_interest_display()}\n"
            f"\nMesazhi:\n{obj.message}\n"
            f"\nMarrë më: {obj.created_at:%Y-%m-%d %H:%M}\n"
        )
        _send_lead_email(
            subject=f"[AS Real Estate] Mesazh i ri — {_header_safe(f'{obj.first_name} {obj.last_name}')}",
            body=body,
            reply_to=obj.email,
        )
