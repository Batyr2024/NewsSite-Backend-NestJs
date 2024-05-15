import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostData } from 'src/posts/data/CreatePost.data';
import { TagsPosts } from 'src/tags-posts/tags-posts.model';
import {Pos}

@Injectable()
export class PostService {
    constructor(@InjectModel(TagsPosts) private tagsPostsRepository: typeof TagsPosts,
    @InjectModel(Post) private tagsPostsRepository: typeof TagsPosts) { }

    async createPost(postObject:CreatePostData){
        try{
        await this.tagsPostsRepository.create(postObject);
        return 'Post was successfully created'
        }catch(error){
            return `ERROR: ${error}`;
        }
    }

}
