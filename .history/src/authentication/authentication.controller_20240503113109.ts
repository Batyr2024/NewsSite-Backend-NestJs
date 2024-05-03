import { Controller } from "@nestjs/common";

@Controller('tag')
export class AuthenticationController{
    constructor(@InjectModel(User) private userRepository: typeof User) { }

    async addNewUser(data: CreateUserData){
        return await this.userRepository.create(data);
    }

    async getByLogin(login:string){
        return await this.userRepository.findOne({where:{login}})
    }
}