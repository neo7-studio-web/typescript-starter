import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private CatsRepository: Repository<Cat>,
    private utilsService: UtilsService,
  ) { }

  findAll(): Promise<Cat[]> {
    return this.CatsRepository.find();
  }

  async findOne(id: string): Promise<Cat | null> {
    return this.utilsService.findOneOrNotFound(this.CatsRepository, id);
  }

  async remove(id: string): Promise<void> {
    const cat = await this.utilsService.findOneOrNotFound(this.CatsRepository, id);
    if (cat) this.CatsRepository.delete(id);
  }

  async create(cat: Cat): Promise<Cat> {
    return this.CatsRepository.save(cat);
  }

  async update(id: string, cat: Partial<Cat>): Promise<Cat> {
    await this.CatsRepository.update(id, cat);
    return this.CatsRepository.findOneBy({ id });
  }
}
