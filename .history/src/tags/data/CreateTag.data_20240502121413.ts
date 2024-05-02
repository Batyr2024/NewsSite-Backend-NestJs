import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostData {
    @IsNotEmpty() 
    @IsString()
    readonly content: string;
}