import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartementsService } from './departements.service';
import { DepartementsController } from './departements.controller';
import { Departement } from './entities/departement.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Departement])], 
  controllers: [DepartementsController],
  providers: [DepartementsService]
})
export class DepartementsModule {}
