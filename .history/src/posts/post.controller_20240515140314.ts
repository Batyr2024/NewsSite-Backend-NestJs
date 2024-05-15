import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from './models/post.model';

@Controller('post')
export class PostController {
    constructor (private postService: PostService){}

    @Post('/create')
    createPost(@Body()postObject:Post){
         this.postService.createPost(postObject);
    }
}