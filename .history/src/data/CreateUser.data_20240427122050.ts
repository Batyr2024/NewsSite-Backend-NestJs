import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserData {
    @IsNotEmpty() 
    @IsString()
    readonly login: string;
    private password: string;
    readonly firstName: string;
    readonly lastName: string;
}