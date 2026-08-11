# Backend (NestJS)

This app lives in `/apps/backend` and uses NestJS + Mongoose (MongoDB) with Clerk-compatible JWT verification.

## Required environment variables

Create `apps/backend/.env`:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/moxie
CLERK_ISSUER=https://your-clerk-domain.clerk.accounts.dev
CLERK_JWKS_URL=https://your-clerk-domain.clerk.accounts.dev/.well-known/jwks.json
CLERK_AUDIENCE=
```

## Run locally

From repository root:

```bash
npm run dev:backend
```

## API examples

- `GET /health` — public health check.
- `GET /auth/me` — protected, requires `Authorization` bearer token.
- `GET /users` and `POST /users` — protected User model endpoints.

## Notes

- Validation is enabled globally via `ValidationPipe`.
- Errors are normalized by a global exception filter.
