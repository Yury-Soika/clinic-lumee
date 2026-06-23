#!/usr/bin/env bash

set -euo pipefail

USER="${DEPLOY_USER:-iwbfnzmznr}"
HOST="${DEPLOY_HOST:-66.29.148.128}"
APP_ROOT="${DEPLOY_APP_ROOT:-/home/iwbfnzmznr/demo}"
SSH_PORT="${DEPLOY_SSH_PORT:-21098}"

echo "==> Deploying Lumee Clinic to ${USER}@${HOST}:${APP_ROOT}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "==> Installing dependencies"
npm ci

echo "==> Building production bundle"
NODE_ENV=production npm run build

ARCHIVE_NAME="clinic-lumee-production-build.tar.gz"

echo "==> Creating ${ARCHIVE_NAME}"
COPYFILE_DISABLE=1 tar czf "${ARCHIVE_NAME}" \
  .next \
  app.js \
  package.json \
  package-lock.json \
  public \
  next.config.* 2>/dev/null || true

echo "==> Uploading archive to server"
scp -P "${SSH_PORT}" "${ARCHIVE_NAME}" "${USER}@${HOST}:${APP_ROOT}/"

echo "==> Running remote deploy commands"
ssh -p "${SSH_PORT}" "${USER}@${HOST}" bash -lc "
  set -euo pipefail
  cd '${APP_ROOT}'
  echo ' -> Unpacking ${ARCHIVE_NAME}'
  tar xzf '${ARCHIVE_NAME}'
  echo ' -> Removing real node_modules (CloudLinux uses venv symlink)'
  rm -rf node_modules
  echo ' -> Removing next.config.ts so Next uses next.config.js (no TypeScript at runtime)'
  rm -f next.config.ts
  echo ' -> Done. In the hosting panel: run Install dependencies (if needed), then Restart app.'
"

echo "==> Deployment complete."
