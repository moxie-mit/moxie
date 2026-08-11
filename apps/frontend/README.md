# Frontend (Next.js)

This app lives in `/apps/frontend` and uses Next.js (App Router), TypeScript, Tailwind CSS, Clerk auth, and shadcn-style UI primitives.

## Required environment variables

Create `apps/frontend/.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
```

## Run locally

From repository root:

```bash
npm run dev:frontend
```

## Auth flow example

- `/sign-in` and `/sign-up` render Clerk components.
- `/dashboard` is protected and redirects to sign-in when unauthenticated.
- Home page demonstrates signed-in/out states.

## UI example

- `src/components/ui/button.tsx` is a shadcn-style Button built with Radix Slot + class-variance-authority.
- Home page uses this component for auth actions.
