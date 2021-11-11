import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeDto {
    @IsNotEmpty()
    @IsString()
    nom_employe: string

    @IsNotEmpty()
    @IsString()
    prenom_employe: string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email_employe: string

    @IsNotEmpty()
    @IsNumber()
    departement
}
