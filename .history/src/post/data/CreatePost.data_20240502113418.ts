import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserData {
    @IsNotEmpty() 
    @IsString()
    id: number;
    content: string;
    topic: string;
    idPostUser: number;
    idTags: number;
    picture: string;