import { Module } from '@nestjs/common';
import { PointagesService } from './pointages.service';
import { PointagesController } from './pointages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pointage } from './entities/pointage.entity';
import { Employe } from 'src/employes/entities/employe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pointage,Employe])],
  
controllers: [PointagesController],
  providers: [PointagesService]
})
export class PointagesModule {}
