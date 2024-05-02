import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserData } from 'src/data/CreateUser.data';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) { }

}
