/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt  from 'bcrypt'
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { Employe } from './entities/employe.entity';

@Injectable()
export class EmployesService {
 constructor(
   @InjectRepository(Employe )private readonly employeRepository: Repository<Employe>
 ){}

  async create(createData: CreateEmployeDto) {
    const {email_employe} = createData
    const employe = await this.employeRepository.findOne({email_employe})
        
    if (employe) {
      throw new ConflictException(`Cet courriel ${email_employe} existe dans la base de données`)
    }
    
    return await this.employeRepository.save(createData)       
  }

  async findAll() {
    return await this.employeRepository.find() 
  }

  async findOne(id: number) {
    return await this.employeRepository.findOne(id) 
  }

  async update(id: number, updateData: UpdateEmployeDto) {
    const employe = await this.employeRepository.preload({
      id,
      ...updateData,
    });

    if (!employe) {
      throw new NotFoundException(`L'employé dont l'identifiant est:${id} est introuvable`)
    }

    return await this.employeRepository.save(employe);
  }

  async remove(id: number) {
    const employe = await this.employeRepository.findOne(id);

     if (!employe) {
       throw new NotFoundException(`L'employe dont l'identifiant est:${id} est introuvable`)
     }
     try {
      return `L'employé ${employe.nom_employe} ${employe.prenom_employe} à été suppression effectué avec succes`
     } catch (error) {
      throw error
     }
    
  }
}
