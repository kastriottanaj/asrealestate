import django_filters

from .models import Property


class PropertyFilter(django_filters.FilterSet):
    location = django_filters.CharFilter(field_name="neighborhood", lookup_expr="icontains")
    bedrooms_min = django_filters.NumberFilter(field_name="bedrooms", lookup_expr="gte")
    price_min = django_filters.NumberFilter(field_name="price", lookup_expr="gte")
    price_max = django_filters.NumberFilter(field_name="price", lookup_expr="lte")
    featured = django_filters.BooleanFilter(field_name="featured")

    class Meta:
        model = Property
        fields = ["status", "type", "bedrooms", "has_ownership_doc"]
