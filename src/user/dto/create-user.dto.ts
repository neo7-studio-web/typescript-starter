import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
} 