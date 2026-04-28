from django.db import models


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
    status = models.CharField(max_length=20, choices=PROPERTY_STATUS_CHOICES, db_index=True)
    type = models.CharField(max_length=20, choices=PROPERTY_TYPE_CHOICES, db_index=True)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    neighborhood = models.CharField(max_length=200, db_index=True)
    bedrooms = models.PositiveSmallIntegerField(default=0)
    bathrooms = models.PositiveSmallIntegerField(default=0)
    area = models.PositiveIntegerField(help_text="Area in m²")
    image_url = models.URLField(max_length=500, blank=True)
    featured = models.BooleanField(default=False, db_index=True)
    has_ownership_doc = models.BooleanField(default=True, help_text="Fletë poseduese")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-featured", "-created_at"]
        verbose_name_plural = "Properties"

    def __str__(self):
        return f"{self.title} ({self.get_status_display()})"

    @property
    def formatted_price(self):
        amount = int(self.price) if self.price == int(self.price) else self.price
        formatted = f"{amount:,.0f}".replace(",", " ")
        if self.status == "qira":
            return f"€{formatted}/muaj"
        return f"€{formatted}"


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
