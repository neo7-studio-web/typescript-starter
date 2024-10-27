import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class RepositoryHelper<T> extends Repository<T> {
  async findOneOrNotFound(id: string): Promise<T> {
    const element = await this.findOne({ where: { id } as any });
    if (!element) {
      throw new NotFoundException('Entity not found');
    }
    return element;
  }
}
