import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UtilsService {
  async findOneOrNotFound(repository: Repository<any>, id: string): Promise<any> {
    const element = await repository.findOneBy({ id });
    if (!element) {
      throw new NotFoundException('Entity not found');
    }
    return element;
  }
}
