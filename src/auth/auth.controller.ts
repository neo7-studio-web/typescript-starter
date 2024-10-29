import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { ApiOkResponse } from '@nestjs/swagger';
import { LoginUserResponseDto } from 'src/user/dto/login-user-response.dto';
import { SetUserDto } from 'src/user/dto/set-user.dto';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    @ApiOperation({ summary: 'Login a user', description: 'Logs in a user' })
    @ApiOkResponse({ description: 'User logged in successfully', type: LoginUserResponseDto })
    async login(@Body() user: SetUserDto) {
        return this.authService.login(user);
    }
}
