import { Controller, Get, Post, Body} from '@nestjs/common';
import { PointagesEmployeService } from './pointagesemploye.service';
import { CreatePointageDto } from './pointageemploye.dto';


@Controller('pointagesemploye')
export class PointagesEmployeController {
  constructor(private readonly pointagesEmployeService: PointagesEmployeService) { }

  @Post()
  create(@Body() createPointageDto: CreatePointageDto) {
    return this.pointagesEmployeService.create(createPointageDto);
  }

  @Get()
  findAll() {
    return this.pointagesEmployeService.findAll();
  }

}
