import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EquipesService } from './equipes.service';
import { EquipeDto } from './equipe.dto';

@Controller('equipes')
export class EquipesController {
  constructor(private readonly equipesService: EquipesService) {}

  @Post()
  create(@Body() createEquipeDto: EquipeDto) {
    return this.equipesService.create(createEquipeDto);
  }

  @Get()
  findAll() {
    return this.equipesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEquipeDto: EquipeDto) {
    return this.equipesService.update(+id, updateEquipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipesService.remove(+id);
  }
}
