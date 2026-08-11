# Backend (NestJS)

This app lives in `/apps/backend` and uses NestJS + Mongoose (MongoDB) with `@clerk/express` for authentication.

## Required environment variables

Create `apps/backend/.env`:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/moxie
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Run locally

From repository root:

```bash
pnpm run dev:backend
```

## API examples

- `GET /health` — public health check.
- `GET /auth/me` — protected, requires `Authorization` bearer token.
- `GET /users` and `POST /users` — protected User model endpoints.

## Notes

- Validation is enabled globally via `ValidationPipe`.
- Errors are normalized by a global exception filter.
