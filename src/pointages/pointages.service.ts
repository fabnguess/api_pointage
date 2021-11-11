import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { CreatePointageDto } from './dto/create-pointage.dto';
import { Pointage } from './entities/pointage.entity';
import { Employe } from 'src/employes/entities/employe.entity';
import { UpdatePointageDto } from './dto/update-pointage.dto';


@Injectable()
export class PointagesService {
  constructor(
    @InjectRepository(Pointage)
      private readonly pointageRepository: Repository<Pointage>,
      @InjectRepository(Employe)
      private readonly employeRepository: Repository<Employe> 
  ){}
  

  async gerePointage(createData: CreatePointageDto) {
    const {email_employe} = createData
    const employeExiste = await this.employeRepository.findOne({email_employe})

    // Le mail utilisé n'existe pas dans la BD
    if (!employeExiste) {
      throw new NotFoundException(`Cet courriel ${email_employe} n'existe dans la base de données`)
    }

    //On verifie que l'employé courant n'as pas deja pointé le jour-ci
    const pointageExiste = await this.pointageRepository.findOne({
      where:[{dateDuJour:createData.dateDuJour, employe:employeExiste.id}]
    })
    
    // Ici point pointage jour exite donc nous la modifions
    if (pointageExiste) {
     delete createData.heureArrive
     return this.modifiePointage(pointageExiste.id,createData)      
    }

    delete createData.heureDepart
    const data = {
      employe:employeExiste,
      ...createData
    }
    
    return await this.pointageRepository.save(data)

  }

  async modifiePointage(id:number, createData: CreatePointageDto){
    const pointage = await this.pointageRepository.preload({
      id,
      ...createData,
    });

    return await this.pointageRepository.save(pointage);
    
  }

  async ajoutJustification(createData: UpdatePointageDto){
    //On verifie que l'employé courant n'as pas deja pointé le jour-ci
   const pointage = await this.pointageRepository.findOne({
      where:[{dateDuJour:createData.dateDuJour, employe:createData.employe}]
    })

    if (pointage) {
      throw new NotFoundException(`L'employé ${pointage.employe.nom_employe} ${pointage.employe.prenom_employe} à déjà fait l'objet d'un pointage`)
    }
        
    return await this.pointageRepository.save(createData)
    
  }

  async ListerPointageJour(dateDuJour:string) {
    return await this.pointageRepository.find({
      where:[{dateDuJour, heureArrive:Not("")}]
    })     
  }

  async ListerjustificationJour(dateDuJour:string) {
    return await this.pointageRepository.find({
      where:[{dateDuJour, heureArrive:IsNull()}]
    })    
  }
}
