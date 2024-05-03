import { Body, Controller, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserData } from "src/users/data/CreateUser.data";
import { User } from "src/users/models/user.model";
import { AuthenticationService } from "./authentication.service";

@Controller('auth')
export class AuthenticationController{
    constructor(@InjectModel(User) private userRepository: typeof User) { }

    @Post()
    async addNewUser(@Body() data: CreateUserData){
        const newUser = AuthenticationService.re
        return await this.userRepository.create(data);
    }

    async getByLogin(login:string){
        return await this.userRepository.findOne({where:{login}})
    }
}