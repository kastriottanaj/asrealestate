#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt
python manage.py collectstatic --no-input
# Apply DB migrations during build so schema changes always go live with the
# code, regardless of the runtime start command. Idempotent — a no-op if the
# DB is already up to date.
python manage.py migrate --no-input

if [ "${SEED_DEMO:-False}" = "True" ]; then
  python manage.py seed_demo
fi
