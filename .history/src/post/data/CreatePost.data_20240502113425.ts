import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserData {
    @IsNotEmpty() 
    @IsString()
    REOid: number;
    REOcontent: string;
    REOtopic: string;
    REOidPostUser: number;
    REOidTags: number;
    REOpicture: string;