import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private async getJwks() {
    const { createRemoteJWKSet } = await import('jose');
    const issuer = process.env.CLERK_ISSUER;
    const jwksUrl =
      process.env.CLERK_JWKS_URL ||
      (issuer ? `${issuer}/.well-known/jwks.json` : undefined);

    if (!jwksUrl) {
      throw new UnauthorizedException(
        'Missing CLERK_ISSUER or CLERK_JWKS_URL environment variable',
      );
    }

    return createRemoteJWKSet(new URL(jwksUrl));
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<Request & { auth?: unknown }>();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing authorization header');
    }

    const token = authHeader.slice('Bearer '.length).trim();

    try {
      const { jwtVerify } = await import('jose');
      const { payload } = await jwtVerify(token, await this.getJwks(), {
        issuer: process.env.CLERK_ISSUER,
        audience: process.env.CLERK_AUDIENCE,
      });

      request.auth = payload;
      return true;
    } catch {
      throw new UnauthorizedException('Invalid authentication token');
    }
  }
}
