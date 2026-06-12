#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt
python manage.py collectstatic --no-input

if [ "${SEED_DEMO:-False}" = "True" ]; then
  python manage.py seed_demo
fi
