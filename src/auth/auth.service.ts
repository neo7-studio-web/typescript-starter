import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { SetUserDto } from 'src/user/dto/set-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private jwtStrategy: JwtStrategy
    ) { }

    async login(payload: SetUserDto) {
        await this.jwtStrategy.validate(payload);
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
