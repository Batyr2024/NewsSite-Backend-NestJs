import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserData } from 'src/data/CreateTask.data';

@Injectable()
export class TodoService {
