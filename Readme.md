# Moxie Workspace

Initial monorepo scaffold with:

- **Frontend**: Next.js app router app in `/apps/frontend` (TypeScript, Tailwind, shadcn-style UI primitives, Clerk auth)
- **Backend**: NestJS app in `/apps/backend` (TypeScript, Mongoose/MongoDB, Clerk token guard, validation pipe)

## Prerequisites

- Node.js 20+
- pnpm 10+
- MongoDB instance (local or remote)

## Setup

```bash
pnpm install
cp .env.example .env
cp apps/frontend/.env.example apps/frontend/.env.local
cp apps/backend/.env.example apps/backend/.env
```

## Run in development

```bash
pnpm run dev
```

Or run apps individually:

```bash
pnpm run dev:frontend
pnpm run dev:backend
```

## Build and checks

```bash
pnpm run lint
pnpm run typecheck
pnpm run build
```

## Configuration locations

- Root defaults: `/.env.example`
- Frontend auth envs: `/apps/frontend/.env.example`
- Backend DB/auth envs: `/apps/backend/.env.example`
- Frontend docs: `/apps/frontend/README.md`
- Backend docs: `/apps/backend/README.md`
