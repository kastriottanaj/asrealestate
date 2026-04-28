from rest_framework import serializers

from .models import Property, Testimonial, ListingRequest, Subscriber, ContactMessage


class PropertySerializer(serializers.ModelSerializer):
    formatted_price = serializers.ReadOnlyField()
    image_src = serializers.URLField(source="image_url", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    type_display = serializers.CharField(source="get_type_display", read_only=True)

    class Meta:
        model = Property
        fields = [
            "id", "title", "status", "status_display", "type", "type_display",
            "price", "formatted_price", "neighborhood", "bedrooms", "bathrooms",
            "area", "image_url", "image_src", "featured", "has_ownership_doc",
        ]


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ["id", "name", "role", "text", "avatar_url", "rating", "language"]


class ListingRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingRequest
        fields = [
            "id", "first_name", "last_name", "email", "phone",
            "property_type", "property_status", "location", "area", "price",
            "description", "created_at",
        ]
        read_only_fields = ["id", "created_at"]


class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = ["id", "email", "created_at"]
        read_only_fields = ["id", "created_at"]


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = [
            "id", "first_name", "last_name", "email", "phone",
            "interest", "message", "created_at",
        ]
        read_only_fields = ["id", "created_at"]
