import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PointagesService } from './pointages.service';
import { CreatePointageDto } from './dto/create-pointage.dto';

@Controller('pointages')
export class PointagesController {
  constructor(private readonly pointagesService: PointagesService) {}

  @Post()
  create(@Body() createPointageDto: CreatePointageDto) {
    return this.pointagesService.gerePointage(createPointageDto);
  }

  @Post('/justifications')
  justification(@Body() createPointageDto: CreatePointageDto) {
    return this.pointagesService.ajoutJustification(createPointageDto);
  }

  @Get(':dateDuJour')
  pointageJour(@Param('dateDuJour') dateDuJour: string) {
   return this.pointagesService.ListerPointageJour(dateDuJour);
  }

  @Get('/justifications/:dateDuJour')
  justificationJour(@Param('dateDuJour') dateDuJour: string) {
   return this.pointagesService.ListerjustificationJour(dateDuJour);
  }
}
