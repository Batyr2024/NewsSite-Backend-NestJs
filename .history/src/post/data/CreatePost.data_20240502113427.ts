import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserData {
    @IsNotEmpty() 
    @IsString()
    readonly id: number;
    readonly content: string;
    readonly topic: string;
    readonly idPostUser: number;
    readonly idTags: number;
    readonly picture: string;