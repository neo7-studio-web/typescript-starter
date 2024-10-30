import { ApiProperty } from "@nestjs/swagger";

export class CatDto {

    @ApiProperty({ description: 'The name of the cat', example: 'Whiskers' })
    readonly name: string;

    @ApiProperty({ description: 'The age of the cat', example: 5 })
    readonly age: number;

    @ApiProperty({ description: 'The breed of the cat', example: 'Persian' })
    readonly breed: string;

    @ApiProperty({ description: 'The active status of the cat', example: true })
    readonly isActive: boolean;

    @ApiProperty({ description: 'The creation date of the cat', example: '2024-01-01'})
    readonly createdOn: Date;

    @ApiProperty({ description: 'The update date of the cat', example: '2024-01-01'})
    readonly updatedOn: Date;
}