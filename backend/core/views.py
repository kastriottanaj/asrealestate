from rest_framework import viewsets, mixins

from .models import Property, Testimonial, ListingRequest, Subscriber, ContactMessage
from .serializers import (
    PropertySerializer, TestimonialSerializer, ListingRequestSerializer,
    SubscriberSerializer, ContactMessageSerializer,
)
from .filters import PropertyFilter


class PropertyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    filterset_class = PropertyFilter


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
