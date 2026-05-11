import re
from decimal import Decimal, InvalidOperation

from django import forms
from django.contrib import admin
from django.utils.html import format_html

from .models import Property, PropertyImage, Testimonial, ListingRequest, Subscriber, ContactMessage


def parse_loose_number(value):
    """Parse number input tolerating thousand separators and EU/US decimal markers.

    "48,500", "48.500", "48 500", "48500" -> 48500
    "59,67", "59.67"                       -> 59.67
    "1,500.50", "1.500,50"                  -> 1500.50
    Empty string / None -> None
    """
    if value is None:
        return None
    s = str(value).strip()
    if not s:
        return None
    s = re.sub(r"\s+", "", s)
    has_comma = "," in s
    has_dot = "." in s
    if has_comma and has_dot:
        if s.rfind(",") > s.rfind("."):
            s = s.replace(".", "").replace(",", ".")
        else:
            s = s.replace(",", "")
    elif has_comma:
        parts = s.split(",")
        if len(parts) >= 2 and all(len(p) == 3 for p in parts[1:]):
            s = s.replace(",", "")
        else:
            s = s.replace(",", ".")
    elif has_dot:
        parts = s.split(".")
        if len(parts) >= 2 and all(len(p) == 3 for p in parts[1:]):
            s = s.replace(".", "")
    try:
        return Decimal(s)
    except InvalidOperation:
        raise forms.ValidationError("Numri nuk është i vlefshëm.")


class PropertyAdminForm(forms.ModelForm):
    price = forms.CharField(
        label="Price",
        help_text="P.sh. 48500 ose 48,500 ose 48.500 — sistemi e kupton.",
    )
    area = forms.CharField(
        label="Area",
        required=False,
        help_text="Sipërfaqja në m² — me ose pa dhjetore (p.sh. 59 ose 59.67 ose 59,67).",
    )

    class Meta:
        model = Property
        fields = "__all__"

    def clean_price(self):
        parsed = parse_loose_number(self.cleaned_data.get("price"))
        if parsed is None:
            raise forms.ValidationError("Çmimi është i detyrueshëm.")
        return parsed.quantize(Decimal("0.01"))

    def clean_area(self):
        parsed = parse_loose_number(self.cleaned_data.get("area"))
        if parsed is None:
            return None
        return parsed.quantize(Decimal("0.01"))

admin.site.site_header = "AS Capital Real Estate Administration"
admin.site.site_title = "AS Capital Real Estate Admin"
admin.site.index_title = "Welcome to AS Capital Real Estate Admin Panel"

class PropertyImageInline(admin.TabularInline):
    model = PropertyImage
    extra = 1
    fields = ("image", "is_cover", "order", "preview")
    readonly_fields = ("preview",)

    def preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 80px; border-radius: 6px;" />', obj.image.url)
        return ""


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    form = PropertyAdminForm
    list_display = ("title", "status", "type", "neighborhood", "price", "featured", "is_published", "created_at")
    list_filter = ("is_published", "status", "type", "featured", "has_ownership_doc")
    search_fields = ("title", "neighborhood", "slug")
    list_editable = ("featured", "is_published")
    ordering = ("-featured", "-created_at")
    readonly_fields = ("slug",)
    inlines = [PropertyImageInline]


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
