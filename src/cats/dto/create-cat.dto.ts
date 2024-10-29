import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsInt()
    @Min(0)
    readonly age: number;

    @IsString()
    @IsNotEmpty()
    readonly breed: string;
} 