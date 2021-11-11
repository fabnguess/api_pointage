import {  Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StatutPointage } from 'src/utils/statut.pointage-enum';
import { Horodatage } from './../../utils/horodatage';

@Entity('pointagesemploye')
export class PointagesEmploye extends Horodatage{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type: 'enum',
        enum: StatutPointage,
        default: StatutPointage.PRESENCE,
      })
    statut_pointage:string

    @Column()
    heure: string
 
}
