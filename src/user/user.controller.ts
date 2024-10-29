import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    getProfile(@Request() req) {
        return req.user;
    }

    @Post('register')
    register(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
}
