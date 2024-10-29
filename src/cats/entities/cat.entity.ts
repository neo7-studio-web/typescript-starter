import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    breed: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdOn: Date;

    @UpdateDateColumn()
    updatedOn: Date;
}
