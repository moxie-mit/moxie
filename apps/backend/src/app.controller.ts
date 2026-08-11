import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { getAuth } from '@clerk/express';
import type { Request } from 'express';

import { ClerkAuthGuard } from './auth/clerk-auth.guard';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return { status: 'ok' };
  }

  @UseGuards(ClerkAuthGuard)
  @Get('auth/me')
  me(@Req() request: Request) {
    return { auth: getAuth(request) };
  }
}
