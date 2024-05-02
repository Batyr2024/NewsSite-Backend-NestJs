import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './todo.model';
import { CreateTaskData } from 'src/data/CreateTask.data';

@Injectable()
export class TodoService {
