from django.contrib import admin

from .models import Property, Testimonial, ListingRequest, Subscriber, ContactMessage


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ("title", "status", "type", "neighborhood", "price", "featured", "created_at")
    list_filter = ("status", "type", "featured", "has_ownership_doc")
    search_fields = ("title", "neighborhood")
    list_editable = ("featured",)
    ordering = ("-featured", "-created_at")


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("name", "role", "language", "rating", "is_published", "created_at")
    list_filter = ("language", "is_published", "rating")
    search_fields = ("name", "text")
    list_editable = ("is_published",)


@admin.register(ListingRequest)
class ListingRequestAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "property_type", "property_status", "location", "is_handled", "created_at")
    list_filter = ("property_type", "property_status", "is_handled")
    search_fields = ("first_name", "last_name", "email", "phone", "location")
    list_editable = ("is_handled",)
    readonly_fields = ("created_at",)


@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    list_display = ("email", "created_at")
    search_fields = ("email",)
    readonly_fields = ("created_at",)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "email", "interest", "is_handled", "created_at")
    list_filter = ("interest", "is_handled")
    search_fields = ("first_name", "last_name", "email", "message")
    list_editable = ("is_handled",)
    readonly_fields = ("created_at",)
