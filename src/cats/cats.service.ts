import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { CatDto } from './dto/cat.dto';
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

  async findAll(): Promise<CatDto[]> {
    const cats = await this.repositoryHelper.find();
    return cats.map(cat => this.mapToDto(cat));
  }

  async findOne(id: string): Promise<CatDto | null> {
    const cat = await this.repositoryHelper.findOneOrNotFound(id);
    return cat ? this.mapToDto(cat) : null;
  }

  async remove(id: string): Promise<void> {
    const cat = await this.repositoryHelper.findOneOrNotFound(id);
    if (cat) this.repositoryHelper.delete(id);
  }

  async create(cat: Partial<Cat>): Promise<CatDto> {
    const newCat = await this.repositoryHelper.save(cat);
    return this.mapToDto(newCat);
  }

  async update(id: string, cat: Partial<Cat>): Promise<CatDto> {
    await this.repositoryHelper.update(id, cat);
    const updatedCat = await this.repositoryHelper.findOneBy({ id });
    return this.mapToDto(updatedCat);
  }

  private mapToDto(cat: Cat): CatDto {
    const dto = new CatDto();
    // DTO has no id field, so we need to remove it from the cat object
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...catWithoutId } = cat;
    Object.assign(dto, catWithoutId);
    return dto;
  }
}
