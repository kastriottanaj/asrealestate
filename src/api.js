const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export async function fetchProperties(filters = {}) {
  const params = new URLSearchParams();
  if (filters.status) params.set('status', filters.status);
  if (filters.type) params.set('type', filters.type);
  if (filters.location) params.set('location', filters.location);
  if (filters.featured) params.set('featured', 'true');

  const res = await fetch(`${BASE_URL}/properties/?${params}`);
  if (!res.ok) throw new Error('Gabim gjatë marrjes së pronave.');
  const data = await res.json();
  return data.results ?? data;
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
