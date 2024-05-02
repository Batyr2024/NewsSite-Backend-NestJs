import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateTaskData } from '../data/CreateTask.data'
import { TodoService } from './todo.service';

@Controller('tasks')
export class TodoController {
    constructor (private todoService: TodoService) {}
}