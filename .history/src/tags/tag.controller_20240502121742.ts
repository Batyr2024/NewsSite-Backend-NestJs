import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreatePostData } from './data/CreateTag.data'
import { PostService } from './tag.service';

@Controller('tag')
export class PostController {
    constructor (private todoService: PostService) {}
}