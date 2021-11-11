import { Employe } from "src/employes/entities/employe.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Horodatage } from './../../utils/horodatage';

@Entity('pointages')
export class Pointage extends Horodatage{
    @PrimaryGeneratedColumn()
    id 

    @Column({nullable:false})
    dateDuJour: string

    @Column({nullable:true})
    heureArrive: string

    @Column({nullable:true})
    heureDepart: string

    @Column({nullable:true})
    motifAbsence: string

    @ManyToOne(type=>Employe, (employe)=>employe.pointages,{eager:true})
    employe:Employe
}
