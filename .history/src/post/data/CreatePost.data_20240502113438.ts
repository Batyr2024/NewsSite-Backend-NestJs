import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserData {
    @IsNotEmpty() 
    @IsString()
    readonly content: string;
    readonly topic: string;
    readonly idPostUser: number;
    readonly idTags: number;
    readonly picture: string;
}