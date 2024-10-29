import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UserProfileDto } from 'src/user/dto/user-profile.dto';
import { SetUserDto } from 'src/user/dto/set-user.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'my-nestjs-test',
        });
    }

    async validate(user: SetUserDto) {
        const foundUser = await this.userService.findOne(user.email);
        if (foundUser) {
            const isMatch = await bcrypt.compare(user.password, foundUser.password);
            if (isMatch) {
                const returnedUser = new UserProfileDto();
                returnedUser.id = foundUser.id;
                returnedUser.email = foundUser.email;
                returnedUser.createdOn = foundUser.createdOn;
                return returnedUser;
            }
        }
        throw new UnauthorizedException();
    }
}
