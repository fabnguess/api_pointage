import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointagesEmploye } from './entities/pointageemploye.entity';
import { CreatePointageDto } from './pointageemploye.dto';


@Injectable()
export class PointagesEmployeService {
  constructor(
    @InjectRepository(PointagesEmploye)private readonly pointagesEmployeRepository: Repository<PointagesEmploye>
  ){}

  async create(createData: CreatePointageDto) {
    return await this.pointagesEmployeRepository.save(createData)
  }

  async findAll() {
    return await this.pointagesEmployeRepository.find()
  }
}
