import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserData } from 'src/users/data/CreateUser.data';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) { }

    async addNewUser(data: CreateUserData){
        const hashedPassword = await bcrypt.hash(data.password, 10);
        try {
            const createdUser = await this.userService.addNewUser({
                ...registrationData,
                password: hashedPassword
            });
            createdUser.password = undefined;
            return createdUser;
        } catch (error) { throw new HttpException(error, HttpStatus.BAD_REQUEST); }
    }

    async getByLogin(login:string){
        return await this.userRepository.findOne({where:{login}})
    }
}
