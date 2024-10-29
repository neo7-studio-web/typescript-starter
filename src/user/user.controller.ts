import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SetUserDto } from './dto/set-user.dto';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger';
import { UserProfileDto } from './dto/user-profile.dto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    @ApiOperation({ summary: 'Register a new user', description: 'Creates a new user'})
    @ApiCreatedResponse({ description: 'User created successfully', type: UserProfileDto })
    @ApiBadRequestResponse({ description: 'Invalid input' })
    @ApiConflictResponse({ description: 'A user with this email already exists' })
    register(@Body() createUserDto: SetUserDto) {
        return this.userService.create(createUserDto);
    }
}
