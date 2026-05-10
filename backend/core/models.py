from cloudinary.models import CloudinaryField
from django.db import models
from django.utils.text import slugify


PROPERTY_STATUS_CHOICES = [
    ("shitje", "Shitje"),
    ("qira", "Qira"),
]

PROPERTY_TYPE_CHOICES = [
    ("banese", "Banesë"),
    ("penthouse", "Penthouse"),
    ("vile", "Vilë"),
    ("zyre", "Zyre"),
    ("lokal", "Lokal"),
    ("toke", "Tokë"),
]

CONTACT_INTEREST_CHOICES = [
    ("blej", "Dua të blej"),
    ("shes", "Dua të shes"),
    ("qira-kerkoje", "Kërkoj qira"),
    ("qira-ofroj", "Ofroj qira"),
    ("investim", "Investim"),
]


class Property(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=240, unique=True, blank=True, db_index=True)
    status = models.CharField(max_length=20, choices=PROPERTY_STATUS_CHOICES, db_index=True)
    type = models.CharField(max_length=20, choices=PROPERTY_TYPE_CHOICES, db_index=True)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    neighborhood = models.CharField(max_length=200, db_index=True)
    bedrooms = models.PositiveSmallIntegerField(default=0)
    bathrooms = models.PositiveSmallIntegerField(default=0)
    area = models.PositiveIntegerField(help_text="Area in m²")
    description = models.TextField(blank=True, help_text="Përshkrim i plotë i pronës — kati, gjendja, veçoritë")
    image_url = models.URLField(max_length=500, blank=True)
    featured = models.BooleanField(default=False, db_index=True)
    is_published = models.BooleanField(default=True, db_index=True, help_text="Çpublikuar = nuk shfaqet në faqe por mbetet në admin")
    has_ownership_doc = models.BooleanField(default=True, help_text="Fletë poseduese")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-featured", "-created_at"]
        verbose_name_plural = "Properties"

    def __str__(self):
        return f"{self.title} ({self.get_status_display()})"

    def save(self, *args, **kwargs):
        if not self.slug:
            base = slugify(f"{self.title}-{self.neighborhood}")[:200] or "prona"
            super().save(*args, **kwargs)
            self.slug = f"{base}-{self.pk}"
            return super().save(update_fields=["slug"])
        return super().save(*args, **kwargs)

    @property
    def formatted_price(self):
        amount = int(self.price) if self.price == int(self.price) else self.price
        formatted = f"{amount:,.0f}".replace(",", " ")
        if self.status == "qira":
            return f"€{formatted}/muaj"
        return f"€{formatted}"

    @property
    def cover_image_url(self):
        cover = self.images.filter(is_cover=True).first() or self.images.first()
        if cover and cover.image:
            return cover.image.url
        return self.image_url or ""


class PropertyImage(models.Model):
    property = models.ForeignKey(Property, related_name="images", on_delete=models.CASCADE)
    image = CloudinaryField("image")
    is_cover = models.BooleanField(default=False, help_text="Përdoret si fotografia kryesore në listim")
    order = models.PositiveSmallIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-is_cover", "order", "id"]

    def __str__(self):
        return f"Image for {self.property.title}"


class Testimonial(models.Model):
    LANGUAGE_CHOICES = [("sq", "Shqip"), ("en", "English"), ("de", "Deutsch")]

    name = models.CharField(max_length=120)
    role = models.CharField(max_length=120)
    text = models.TextField()
    avatar_url = models.URLField(max_length=500, blank=True)
    rating = models.PositiveSmallIntegerField(default=5)
    language = models.CharField(max_length=2, choices=LANGUAGE_CHOICES, default="sq")
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} — {self.role}"


class ListingRequest(models.Model):
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    email = models.EmailField()
    phone = models.CharField(max_length=40)
    property_type = models.CharField(max_length=20, choices=PROPERTY_TYPE_CHOICES)
    property_status = models.CharField(max_length=20, choices=PROPERTY_STATUS_CHOICES)
    location = models.CharField(max_length=200)
    area = models.PositiveIntegerField(null=True, blank=True)
    price = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    description = models.TextField(blank=True)
    is_handled = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.first_name} {self.last_name} — {self.location}"


class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.email


class ContactMessage(models.Model):
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    email = models.EmailField()
    phone = models.CharField(max_length=40, blank=True)
    interest = models.CharField(max_length=20, choices=CONTACT_INTEREST_CHOICES, default="blej")
    message = models.TextField()
    is_handled = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.email})"
