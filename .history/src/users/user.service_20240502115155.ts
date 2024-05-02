import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserData } from 'src/users/data/CreateUser.data';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) { }

    async addNewUser(data: CreateUserData){
        return await this.userRepository.create(data)
    }
}
