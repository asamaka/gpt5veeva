# VEEVA MVP

Monorepo for AI-powered CV rewrite assistant.

## Stack
- Node.js 20, pnpm 9, TypeScript 5, Next.js 14
- Python 3.11 FastAPI parser service
- Postgres 15 (Prisma TBD), Redis 7

## Getting Started
- Install Node 20 and enable corepack
- Run `pnpm install`
- Start parser: `cd services/parser && python3 -m venv .venv && . .venv/bin/activate && pip install -r requirements.txt && uvicorn main:app --reload --port 8000`
- Start web: `pnpm --filter web dev`

## CI
See `.github/workflows/ci.yml`.

## Tracking
- `PROJECT_TRACKER.md` for scope/milestones
- `TRACEABILITY.yaml` for requirement mapping
- `QA_SCORECARD.md` rolling quality log
- `RELEASE_NOTES.md` per release