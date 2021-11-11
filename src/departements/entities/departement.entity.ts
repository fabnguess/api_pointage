import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Horodatage } from './../../utils/horodatage';
import { Equipe } from './../../equipes/entities/equipe.entity';
import { Employe } from "src/employes/entities/employe.entity";


@Entity('departements')
export class Departement extends Horodatage {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nom_departement: string

    @ManyToOne((type) => Equipe,
        (equipe) => equipe.departements,{eager:true})
    equipe: Equipe

    @OneToMany(type => Employe, employe => employe.departement)
    employes: Employe[]

}
