const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export async function fetchProperties(filters = {}) {
  const params = new URLSearchParams();
  if (filters.status) params.set('status', filters.status);
  if (filters.type) params.set('type', filters.type);
  if (filters.location) params.set('location', filters.location);
  if (filters.featured) params.set('featured', 'true');
  if (filters.bedrooms) params.set('bedrooms', filters.bedrooms);
  if (filters.bedrooms_min) params.set('bedrooms_min', filters.bedrooms_min);
  if (filters.price_min) params.set('price_min', filters.price_min);
  if (filters.price_max) params.set('price_max', filters.price_max);
  if (filters.has_ownership_doc !== undefined) {
    params.set('has_ownership_doc', String(filters.has_ownership_doc));
  }

  const res = await fetch(`${BASE_URL}/properties/?${params}`);
  if (!res.ok) throw new Error('Gabim gjatë marrjes së pronave.');
  const data = await res.json();
  return data.results ?? data;
}

export async function fetchProperty(slug) {
  const res = await fetch(`${BASE_URL}/properties/${slug}/`);
  if (res.status === 404) {
    const err = new Error('Property not found');
    err.notFound = true;
    throw err;
  }
  if (!res.ok) throw new Error('Gabim gjatë marrjes së pronës.');
  return res.json();
}

export async function fetchSimilarProperties(slug) {
  const res = await fetch(`${BASE_URL}/properties/${slug}/similar/`);
  if (!res.ok) return [];
  return res.json();
}

export async function fetchTestimonials() {
  const res = await fetch(`${BASE_URL}/testimonials/`);
  if (!res.ok) throw new Error('Gabim gjatë marrjes së dëshmive.');
  return res.json();
}

export async function submitListingRequest(formData) {
  const res = await fetch(`${BASE_URL}/listings/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}

export async function submitSubscriber(email) {
  const res = await fetch(`${BASE_URL}/subscribers/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}

export async function submitContact(formData) {
  const res = await fetch(`${BASE_URL}/contacts/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}
