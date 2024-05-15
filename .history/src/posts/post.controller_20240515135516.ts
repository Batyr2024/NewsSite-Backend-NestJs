import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor (private postService: PostService){}
    
}