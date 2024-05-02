import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {  } from './models/post.model';
import { CreateUserData } from 'src/users/data/CreateUser.data';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) { }

}