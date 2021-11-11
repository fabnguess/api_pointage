import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquipeDto } from './equipe.dto';
import { Equipe } from './entities/equipe.entity';


@Injectable()
export class EquipesService {

  constructor(
    @InjectRepository(Equipe)
    private readonly equipeRepository: Repository<Equipe>
    ){}
  
  async create(createData: EquipeDto) {
    const {nom_equipe}= createData
    const equipe = await this.equipeRepository.findOne({nom_equipe})
    
    if (equipe) {
      throw new ConflictException(`L\équipe ${nom_equipe} existe dans la base de données`)
    }
    return await this.equipeRepository.save(createData);
  }

  async findAll() {
    return await this.equipeRepository.find();
  }

  async findOne(id: number) {
    const equipe = await this.equipeRepository.findOne(id);

    if (!equipe) {
      throw new NotFoundException(`L'equipe dont l'identifiant est:${id} est introuvable`)
    }
    return equipe
  }

  async update(id: number, updateData: EquipeDto) {
    const newEquipe = await this.equipeRepository.preload({ id,...updateData})

    if (!newEquipe) {
      throw new NotFoundException(`L'equipe dont l'identifiant est:${id} est introuvable`)
    }
        
    return await this.equipeRepository.save(newEquipe);
    
  }

  async remove(id: number) {
    const equipe = await this.equipeRepository.findOne(id);

    if (!equipe) {
      throw new NotFoundException(`L'equipe dont l'identifiant est:${id} est introuvable`)
    }

    try {
      this.equipeRepository.softDelete(id);
      return `L'équipe ${equipe.nom_equipe} à été supprimée avec succes`
     } catch (error) {
      throw error
     }
     
  }
}
