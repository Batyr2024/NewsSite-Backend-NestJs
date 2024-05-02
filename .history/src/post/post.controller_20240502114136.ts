import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateUserData } from './data/CreatePost.data'
import { PostServiceService } from './post.service';

@Controller('user')
export class UserController {
    constructor (private todoService: UserService) {}
}