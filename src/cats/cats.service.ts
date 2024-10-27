import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { RepositoryHelper } from '../utils/repository.helper';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
    private repositoryHelper: RepositoryHelper<Cat>,
  ) {
    this.repositoryHelper = new RepositoryHelper<Cat>(Cat, this.catsRepository.manager, this.catsRepository.queryRunner);
  }

  findAll(): Promise<Cat[]> {
    return this.repositoryHelper.find();
  }

  async findOne(id: string): Promise<Cat | null> {
    return this.repositoryHelper.findOneOrNotFound(id);
  }

  async remove(id: string): Promise<void> {
    const cat = await this.repositoryHelper.findOneOrNotFound(id);
    if (cat) this.repositoryHelper.delete(id);
  }

  async create(cat: Cat): Promise<Cat> {
    return this.repositoryHelper.save(cat);
  }

  async update(id: string, cat: Partial<Cat>): Promise<Cat> {
    await this.repositoryHelper.update(id, cat);
    return this.repositoryHelper.findOneBy({ id });
  }
}
