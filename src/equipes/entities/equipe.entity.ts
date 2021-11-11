import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Horodatage } from './../../utils/horodatage';
import { Departement } from './../../departements/entities/departement.entity';


@Entity('equipes')
export class Equipe extends Horodatage {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nom_equipe: string

    @OneToMany((type) => Departement, (departement) => departement.equipe)
    departements: Departement[]
}
