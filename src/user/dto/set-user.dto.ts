import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SetUserDto {
    
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ description: 'The email of the user', example: 'user@example.com' })
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({ description: 'The password of the user', example: 'password123' })
    readonly password: string;

} 