import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UtilsService {
  async findOneOrNotFound(repository: Repository<any>, id: string): Promise<any> {
    const cat = await repository.findOneBy({ id });
    if (!cat) {
      throw new NotFoundException('Entity not found');
    }
    return cat;
  }
}
