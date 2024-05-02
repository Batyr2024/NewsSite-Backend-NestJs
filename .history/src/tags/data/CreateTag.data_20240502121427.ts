import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostData {
    @IsNotEmpty() 
    @IsString()
    readonly nametag: string;
}