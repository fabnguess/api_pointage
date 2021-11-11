import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class EquipeDto {
   @IsNotEmpty({message:`la propriété "nom équipé" ne peut être vide`})
   @IsString({message:`la propriété "nom équipé" doit être une chaine de caractère`})
   @MinLength(5,{message:`la propriété "nom équipé" doit comporter au minimum 5 caractères`})
   @MaxLength(20,{message:`la propriété "nom équipé" doit comporter au maximum 20 caractères`})
    nom_equipe:string
}
