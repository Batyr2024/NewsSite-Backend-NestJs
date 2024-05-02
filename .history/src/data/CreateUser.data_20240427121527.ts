import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskData {
    @IsNotEmpty() 
    @IsString()
    readonly login: string;
    readonly password: string;
    readonly first: string;
    readonly text: string;
}