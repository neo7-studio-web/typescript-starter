import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCatDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'The name of the cat', example: 'Whiskers' })
    readonly name: string;

    @IsInt()
    @Min(0)
    @ApiProperty({ description: 'The age of the cat', example: 5 })
    readonly age: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'The breed of the cat', example: 'Persian' })
    readonly breed: string;
} 