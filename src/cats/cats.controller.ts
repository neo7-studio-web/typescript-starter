import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

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
  create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto
  ): Promise<Cat> {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.catsService.remove(id);
  }
}
