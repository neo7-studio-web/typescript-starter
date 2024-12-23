import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserProfileDto } from './dto/user-profile.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findOne(email: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { email } });
    }

    async create(user: Partial<User>): Promise<UserProfileDto> {
        const existingUser = await this.findOne(user.email);
        if (existingUser) {
            throw new ConflictException('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = this.usersRepository.create({ ...user, password: hashedPassword });
        const savedUser = await this.usersRepository.save(newUser);
        return {
            id: savedUser.id,
            email: savedUser.email,
            createdOn: savedUser.createdOn,
        } as UserProfileDto;
    }
}
