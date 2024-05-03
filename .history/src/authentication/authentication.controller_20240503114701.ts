import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserData } from "src/users/data/CreateUser.data";
import { User } from "src/users/models/user.model";
import { AuthenticationService } from "./authentication.service";

@Controller('auth')
export class AuthenticationController{
    constructor(private authenticationService:AuthenticationService) { }

    @Post()
    async addNewUser(@Body() data: CreateUserData){
        return this.authenticationService.register(data);
    }
    @Get()
    async getByLogin(@Query('log') login:string, @Query('pas') password:string){
        return this.authenticationService.getAuthenticatedUser(login,password);
    }
}