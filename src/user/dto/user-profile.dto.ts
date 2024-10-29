import { ApiProperty } from '@nestjs/swagger';
export class UserProfileDto {
    @ApiProperty({ description: 'The ID of the user', example: '123' })
    id: string;
    @ApiProperty({ description: 'The email of the user', example: 'user@example.com' })
    email: string;
    @ApiProperty({ description: 'The creation date of the user', example: '2021-01-01' })
    createdOn: Date;
}