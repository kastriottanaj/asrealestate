from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    PropertyViewSet, TestimonialViewSet, ListingRequestViewSet,
    SubscriberViewSet, ContactMessageViewSet,
)

router = DefaultRouter()
router.register(r"properties", PropertyViewSet, basename="property")
router.register(r"testimonials", TestimonialViewSet, basename="testimonial")
router.register(r"listings", ListingRequestViewSet, basename="listing")
router.register(r"subscribers", SubscriberViewSet, basename="subscriber")
router.register(r"contacts", ContactMessageViewSet, basename="contact")

urlpatterns = [
    path("", include(router.urls)),
]
