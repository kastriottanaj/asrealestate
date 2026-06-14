from django.core.management.base import BaseCommand

from core.models import Property, Testimonial


PROPERTIES = [
    {"title": "Banesë moderne në Qendër", "status": "shitje", "type": "banese", "price": 120000, "neighborhood": "Qendër, Prishtinë", "bedrooms": 2, "bathrooms": 1, "area": 75, "image_url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80", "featured": True},
    {"title": "Vilë luksoze në Arbëri", "status": "shitje", "type": "vile", "price": 280000, "neighborhood": "Arbëri, Prishtinë", "bedrooms": 4, "bathrooms": 3, "area": 220, "image_url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", "featured": True},
    {"title": "Zyrë premium në New Born", "status": "qira", "type": "zyre", "price": 800, "neighborhood": "New Born, Prishtinë", "bedrooms": 0, "bathrooms": 1, "area": 60, "image_url": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", "featured": False},
    {"title": "Penthouse me pamje panoramike", "status": "shitje", "type": "penthouse", "price": 195000, "neighborhood": "Dardania, Prishtinë", "bedrooms": 3, "bathrooms": 2, "area": 130, "image_url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", "featured": True},
    {"title": "Banesë e re në Ulpianë", "status": "qira", "type": "banese", "price": 350, "neighborhood": "Ulpianë, Prishtinë", "bedrooms": 2, "bathrooms": 1, "area": 68, "image_url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80", "featured": False},
    {"title": "Lokal tregtar në Pejë", "status": "shitje", "type": "lokal", "price": 85000, "neighborhood": "Qendër, Pejë", "bedrooms": 0, "bathrooms": 1, "area": 45, "image_url": "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=800&q=80", "featured": False},
    {"title": "Tokë ndërtimore në Fushë Kosovë", "status": "shitje", "type": "toke", "price": 45000, "neighborhood": "Fushë Kosovë", "bedrooms": 0, "bathrooms": 0, "area": 500, "image_url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", "featured": False},
    {"title": "Banesë 3+1 në Veternik", "status": "shitje", "type": "banese", "price": 98000, "neighborhood": "Veternik, Prishtinë", "bedrooms": 3, "bathrooms": 2, "area": 95, "image_url": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80", "featured": True},
]

TESTIMONIALS = [
    {"name": "Arbër Krasniqi", "role": "Blerës i banesës së parë", "language": "sq",
     "text": "Ekipi i AS Real Estate më ndihmoi të gjej banesën e ëndrrave në Qendër — procesi ishte i qartë, i shpejtë dhe pa stres. Do i rekomandoja gjithkujt.",
     "avatar_url": "https://i.pravatar.cc/120?img=12"},
    {"name": "Drita Berisha", "role": "Investitore", "language": "sq",
     "text": "Investimi im i parë në Prishtinë shkoi në mënyrë perfekte falë analizës së tyre të tregut. Këshilltarë të vërtetë, jo thjesht agjentë.",
     "avatar_url": "https://i.pravatar.cc/120?img=47"},
    {"name": "Blerim Hoxha", "role": "Pronar i një lokali", "language": "sq",
     "text": "E kam dhënë lokalin me qira përmes AS Real Estate — kontrata e qartë, qiramarrës të verifikuar dhe menaxhim i përkryer. Shumë profesionalë.",
     "avatar_url": "https://i.pravatar.cc/120?img=33"},
]


class Command(BaseCommand):
    help = "Seed demo data: 8 properties and 3 testimonials. Idempotent."

    def handle(self, *args, **options):
        created_p = 0
        for data in PROPERTIES:
            _, was_created = Property.objects.update_or_create(
                title=data["title"], defaults=data,
            )
            created_p += int(was_created)

        created_t = 0
        for data in TESTIMONIALS:
            _, was_created = Testimonial.objects.update_or_create(
                name=data["name"], defaults=data,
            )
            created_t += int(was_created)

        self.stdout.write(self.style.SUCCESS(
            f"Seeded {created_p} new properties (total {Property.objects.count()}), "
            f"{created_t} new testimonials (total {Testimonial.objects.count()})."
        ))
