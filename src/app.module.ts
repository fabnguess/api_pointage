import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormconfig } from './config/typeormconfig';
import { EquipesModule } from './equipes/equipes.module';
import { DepartementsModule } from './departements/departements.module';
import { EmployesModule } from './employes/employes.module';
import { PointagesEmployeModule } from './pointagesemploye/pointagesemploye.module';
import { PointagesModule } from './pointages/pointages.module';



@Module({
  imports: [
  TypeOrmModule.forRoot(typeormconfig),
    EquipesModule,
    DepartementsModule,
    EmployesModule,
    PointagesEmployeModule,
    PointagesModule
  ],
}
)

export class AppModule {}
