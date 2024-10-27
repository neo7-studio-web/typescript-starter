import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('cats')
@UseGuards(JwtAuthGuard)
export class CatsController {
constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cat | null> {
    return this.catsService.findOne(id);
  }

  @Post()
  create(@Body() cat: Cat): Promise<Cat> {
    return this.catsService.create(cat);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cat: Cat): Promise<Cat> {
    return this.catsService.update(id, cat);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.catsService.remove(id);
  }
}
