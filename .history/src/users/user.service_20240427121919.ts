import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserData } from 'src/data/CreateUser.data';

@Injectable()
export class TodoService {
    constructor(@InjectModel(User) private taskRepository: typeof User) { }
}
