import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Departement } from "src/departements/entities/departement.entity";
import { Pointage } from "src/pointages/entities/pointage.entity";
import { Horodatage } from './../../utils/horodatage';

@Entity('employes')
export class Employe extends Horodatage{
@PrimaryGeneratedColumn()
id:number

@Column()
nom_employe:string

@Column()
prenom_employe:string

@Column({unique:false})
email_employe:string

@ManyToOne(type=>Departement, (departement)=>departement.employes,{eager:true})
departement:Departement

@OneToMany(type=>Pointage, pointage=>pointage.employe)
pointages: Pointage[]
}
