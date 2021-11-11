import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class Horodatage{
    @CreateDateColumn({update: false})
    dateCreation: Date;
  
    @UpdateDateColumn()
    dateModification: Date;
  
    @DeleteDateColumn()
    dateSuppression: Date;
}