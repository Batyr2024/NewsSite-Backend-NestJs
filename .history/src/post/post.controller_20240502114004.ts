import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateUserData } from './data/Createpost.data'
import { UserService } from './post.service';

@Controller('user')
export class UserController {
    constructor (private todoService: UserService) {}
}