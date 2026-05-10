from django.contrib.sitemaps import Sitemap

from .models import Property


PUBLIC_DOMAIN = "ascapitalrealestate.com"


class PropertySitemap(Sitemap):
    """One entry per published property — drives Google indexing of detail pages."""

    changefreq = "weekly"
    priority = 0.8
    protocol = "https"

    def items(self):
        return Property.objects.filter(is_published=True).order_by("-featured", "-created_at")

    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        return f"/prona/{obj.slug}"

    def get_urls(self, page=1, site=None, protocol=None):
        # The sitemap is requested via the /api proxy on the public domain, but
        # the upstream Django service runs on ascapital-api.onrender.com. Force
        # the public domain so emitted <loc> URLs resolve correctly for crawlers.
        site = type("PublicSite", (), {"domain": PUBLIC_DOMAIN, "name": PUBLIC_DOMAIN})()
        return super().get_urls(page=page, site=site, protocol=protocol or self.protocol)


class StaticSitemap(Sitemap):
    """Static pages mirrored across the three language prefixes."""

    changefreq = "monthly"
    priority = 0.7
    protocol = "https"

    PATHS = [
        ("", 1.0, "weekly"),
        ("prona", 0.9, "daily"),
        ("sherbimet", 0.8, "monthly"),
        ("rreth-nesh", 0.7, "monthly"),
        ("kontakti", 0.7, "monthly"),
        ("ofroni-pronen", 0.7, "monthly"),
        ("privatesia", 0.3, "yearly"),
    ]

    def items(self):
        # Emit every (path, language) combination so all locales are crawlable.
        out = []
        for path, prio, freq in self.PATHS:
            for lang in ("sq", "en", "de"):
                if lang == "sq":
                    out.append((f"/{path}" if path else "/", prio, freq))
                else:
                    out.append((f"/{lang}/{path}" if path else f"/{lang}", prio, freq))
        return out

    def location(self, item):
        return item[0]

    def priority(self, item):
        return item[1]

    def changefreq(self, item):
        return item[2]

    def get_urls(self, page=1, site=None, protocol=None):
        site = type("PublicSite", (), {"domain": PUBLIC_DOMAIN, "name": PUBLIC_DOMAIN})()
        return super().get_urls(page=page, site=site, protocol=protocol or self.protocol)
