# AS Capital Real Estate — Backend

Django 5.2 + Django REST Framework backend for the AS Capital demo site.

## Stack
- Python 3.10+ (3.12 recommended — matches production on Render)
- Django 5.2 LTS
- Django REST Framework 3.16
- PostgreSQL 14+
- django-cors-headers, django-filter, python-dotenv

## First-time setup

```bash
cd backend
python3.12 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Make sure PostgreSQL is running locally and a database called `ascapital` exists:

```bash
createdb ascapital
```

Copy `.env.example` to `.env` and adjust if your Postgres user/password differs from the defaults.

```bash
cp .env.example .env
```

Apply migrations and seed demo data:

```bash
python manage.py migrate
python manage.py seed_demo
```

(Optional) Create an admin user to access `/admin`:

```bash
python manage.py createsuperuser
```

## Run the dev server

```bash
source venv/bin/activate
python manage.py runserver
```

The API is now at `http://localhost:8000/api/` and the admin at `http://localhost:8000/admin/`.

The frontend reads `VITE_API_URL` from its `.env` (already set to `http://localhost:8000/api`).

## API endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/properties/` | List properties. Filters: `status`, `type`, `location`, `featured`, `bedrooms`, `bedrooms_min`, `has_ownership_doc` |
| GET | `/api/properties/<id>/` | Property detail |
| GET | `/api/testimonials/?language=sq` | List published testimonials |
| POST | `/api/listings/` | Submit a "List your property" request |
| POST | `/api/subscribers/` | Newsletter signup (email) |
| POST | `/api/contacts/` | Contact form submission |

Responses use DRF's default pagination (`{count, next, previous, results}`). The frontend already handles both shapes via `data.results ?? data`.

## Running both frontend + backend

In two terminals:

```bash
# terminal 1 — backend
cd backend && source venv/bin/activate && python manage.py runserver

# terminal 2 — frontend
npm run dev
```

## Reset everything

```bash
dropdb ascapital && createdb ascapital
python manage.py migrate
python manage.py seed_demo
```
