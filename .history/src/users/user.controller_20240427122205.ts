import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateUserData } from '../data/CreateUser.data'
import { TodoService } from './user.service';

@Controller('tasks')
export class TodoController {
    constructor (private todoService: TodoService) {}
}