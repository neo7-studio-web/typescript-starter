
import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
    createdDate: Date

  @UpdateDateColumn()
  updatedDate: Date
}
