import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { JwtStrategy } from './jwt.strategy';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private jwtStrategy: JwtStrategy
    ) { }

    async login(payload: User) {
        await this.jwtStrategy.validate(payload);
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
