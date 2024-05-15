import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostData } from './data/CreatePost.data';
import { TagsPostsService } from 'src/tags-posts/tags-posts.service';

@Controller('post')
export class PostController {
    constructor (private postService: PostService,private tagsPostsSevice:TagsPostsService){}

    @Post('/create')
    createPost(@Body()postObject:CreatePostData){
        return this.tagsPostsSevice.createPost(postObject);
    }
}