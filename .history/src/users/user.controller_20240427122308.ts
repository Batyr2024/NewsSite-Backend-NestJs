import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateUserData } from '../data/CreateUser.data'
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor (private todoService: UserService) {}
}