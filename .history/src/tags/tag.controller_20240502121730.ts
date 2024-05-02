import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreatePostData } from './data/CreatePost.data'
import { PostService } from './post.service';

@Controller('tag')
export class PostController {
    constructor (private todoService: PostService) {}
}