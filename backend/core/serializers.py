from rest_framework import serializers

from .models import Property, PropertyImage, Testimonial, ListingRequest, Subscriber, ContactMessage


class PropertyImageSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()

    class Meta:
        model = PropertyImage
        fields = ["id", "url", "is_cover", "order"]

    def get_url(self, obj):
        return obj.image.url if obj.image else None


class PropertySerializer(serializers.ModelSerializer):
    formatted_price = serializers.ReadOnlyField()
    image_src = serializers.ReadOnlyField(source="cover_image_url")
    images = PropertyImageSerializer(many=True, read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    type_display = serializers.CharField(source="get_type_display", read_only=True)

    class Meta:
        model = Property
        fields = [
            "id", "slug", "title", "status", "status_display", "type", "type_display",
            "price", "formatted_price", "neighborhood", "bedrooms", "bathrooms",
            "area", "description", "image_url", "image_src", "images", "featured",
            "has_ownership_doc",
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
