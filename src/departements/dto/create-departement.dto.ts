import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateDepartementDto {
    @IsNotEmpty()
    @IsString()
    nom_departement

    @IsNotEmpty()
    @IsNumber()
    equipe
}
