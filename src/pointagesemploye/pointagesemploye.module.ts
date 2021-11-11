import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointagesEmployeService } from './pointagesemploye.service';
import { PointagesEmployeController } from './pointagesemploye.controller';
import { PointagesEmploye } from './entities/pointageemploye.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PointagesEmploye])],
  controllers: [PointagesEmployeController],
  providers: [PointagesEmployeService]
})
export class PointagesEmployeModule { }
