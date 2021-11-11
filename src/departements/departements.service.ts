import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { Departement } from './entities/departement.entity';

@Injectable()
export class DepartementsService {
  constructor(
    @InjectRepository(Departement)
    private readonly departementRepository: Repository<Departement>,
  ){}

  async create(createData: CreateDepartementDto) {
    const {nom_departement} = createData
    const departement = await this.departementRepository.findOne({nom_departement})
    
    if (departement) {
      throw new ConflictException(`Le departement ${nom_departement} existe dans la base de données`)
    }
    return await this.departementRepository.save(createData);
  }

  async findAll() {
    return await this.departementRepository.find();
  }

  async findOne(id: number) {
    const departement = await this.departementRepository.findOne(id);

     if (!departement) {
       throw new NotFoundException(`Le departement dont l'identifiant est:${id} est introuvable`)
     }
     return departement
  }

  async update(id: number, updateData: UpdateDepartementDto) {
    const newDepartemet = await this.departementRepository.preload({ id,...updateData})

    if (!newDepartemet) {
      throw new NotFoundException(`Le departement dont l'identifiant est:${id} est introuvable`)
    }
        
    return await this.departementRepository.save(newDepartemet);
  }

  async remove(id: number) {
    const equipe = await this.departementRepository.findOne(id);

     if (!equipe) {
       throw new NotFoundException(`Le departement dont l'identifiant est:${id} est introuvable`)
     }
    return this.departementRepository.softDelete(id);
  }
}
