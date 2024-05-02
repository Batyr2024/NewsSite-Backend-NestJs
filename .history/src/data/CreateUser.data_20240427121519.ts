import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskData {
    @IsNotEmpty() 
    @IsString()
    readonly login: string;
    readonly pasword: string;
    readonly text: string;
    readonly text: string;
}