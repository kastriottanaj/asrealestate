from django.test import SimpleTestCase

from .serializers import ListingRequestSerializer


class ListingRequestSerializerTests(SimpleTestCase):
    def test_accepts_all_public_property_type_choices(self):
        for property_type in ["banese", "shtepi", "penthouse", "vile", "zyre", "objekt", "lokal", "biznes", "depo", "toke"]:
            serializer = ListingRequestSerializer(data={
                "first_name": "A",
                "last_name": "B",
                "email": "lead@example.com",
                "phone": "+38349942941",
                "property_type": property_type,
                "property_status": "shitje",
                "location": "Prishtine",
            })

            self.assertTrue(serializer.is_valid(), serializer.errors)
