import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreatePointageDto {
    @IsString()
    @IsOptional()
    @IsEmail()
    email_employe:string

    @IsString()
    @IsNotEmpty()
    dateDuJour:string

    @IsString()
    @IsOptional()
    heureArrive:string

    @IsString()
    @IsOptional()
    heureDepart: string

    @IsNumber()
    @IsOptional()
    employe

    @IsString()
    @IsOptional()
    motifAbsence: string
}
