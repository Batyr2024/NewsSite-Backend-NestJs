import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateUserData } from './data/CreatePost.data'
import { PostService } from './post.service';

@Controller('user')
export class UserController {
    constructor (private todoService: Service) {}
}