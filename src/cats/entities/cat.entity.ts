import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ description: 'The unique identifier of the cat', example: '123e4567-e89b-12d3-a456-426614174000' })
    id: string;

    @Column()
    @ApiProperty({ description: 'The name of the cat', example: 'Whiskers' })
    name: string;

    @Column()
    @ApiProperty({ description: 'The age of the cat', example: 5 })
    age: number;

    @Column()
    @ApiProperty({ description: 'The breed of the cat', example: 'Persian' })
    breed: string;

    @Column({ default: true })
    @ApiProperty({ description: 'The active status of the cat', example: true })
    isActive: boolean;

    @CreateDateColumn()
    @ApiProperty({ description: 'The creation date of the cat', example: '2024-01-01' })
    createdOn: Date;

    @UpdateDateColumn()
    @ApiProperty({ description: 'The update date of the cat', example: '2024-01-01' })
    updatedOn: Date;
}
