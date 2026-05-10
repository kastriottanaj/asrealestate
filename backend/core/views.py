from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Property, Testimonial, ListingRequest, Subscriber, ContactMessage
from .serializers import (
    PropertySerializer, TestimonialSerializer, ListingRequestSerializer,
    SubscriberSerializer, ContactMessageSerializer,
)
from .filters import PropertyFilter


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


class SubscriberViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer


class ContactMessageViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
