import { IsNotEmpty, IsString } from "class-validator";

export class CreatetagData {
    @IsNotEmpty() 
    @IsString()
    readonly nameTag: string;
}