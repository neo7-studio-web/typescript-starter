import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @IsEmail({}, { message: 'Invalid email' })
  @Column({ nullable: false, unique: true })
  email: string;

  @IsNotEmpty()
  @Column({ nullable: false, length: 60 }) // bcrypt password are 60 characters long
  password: string;
}
