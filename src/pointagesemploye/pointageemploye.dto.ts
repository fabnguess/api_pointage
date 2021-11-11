import {  IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"


export class CreatePointageDto {
    @IsString()
    @IsNotEmpty()
    statut_pointage:string

    @IsNumber()
    @IsNotEmpty()
    employe

    @IsString()
    @IsOptional()
    heure

    @IsNumber()
    @IsNotEmpty()
    pointage
}