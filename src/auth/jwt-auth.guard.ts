import { Injectable, ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    // Override the handleRequest method to throw a ForbiddenException instead of UnauthorizedException
    handleRequest(err: any, user: any) {
        if (err || !user) {
            throw new ForbiddenException('Access denied');
        }
        return user;
    }
}
