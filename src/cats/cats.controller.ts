import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CatDto } from './dto/cat.dto';

@Controller('cats')
@UseGuards(JwtAuthGuard)
export class CatsController {
constructor(private readonly catsService: CatsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all cats', description: 'Returns all cats' })
  @ApiOkResponse({ type: [CatDto] })
  findAll(): Promise<CatDto[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a cat by ID', description: 'Returns a cat by ID' })
  @ApiOkResponse({ type: CatDto })
  @ApiNotFoundResponse({ description: 'Cat not found' })
  findOne(@Param('id') id: string): Promise<CatDto | null> {
    return this.catsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new cat', description: 'Creates a new cat' })
  @ApiCreatedResponse({ type: CatDto })
  @ApiBadRequestResponse({ description: 'Invalid input' })
  create(@Body() createCatDto: CreateCatDto): Promise<CatDto> {
    return this.catsService.create(createCatDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a cat by ID', description: 'Updates a cat by ID' })
  @ApiOkResponse({ type: CatDto })
  @ApiNotFoundResponse({ description: 'Cat not found' })
  update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto
  ): Promise<CatDto> {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a cat by ID', description: 'Deletes a cat by ID' })
  @ApiOkResponse({ description: 'Cat deleted successfully' })
  @ApiNotFoundResponse({ description: 'Cat not found' })
  remove(@Param('id') id: string): Promise<void> {
    return this.catsService.remove(id);
  }
}
