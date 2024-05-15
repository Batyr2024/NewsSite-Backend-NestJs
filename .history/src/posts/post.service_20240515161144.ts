import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostData } from 'src/posts/data/CreatePost.data';
import { TagsPosts } from 'src/tags-posts/tags-posts.model';
import { Post } from './models/post.model';

@Injectable()
export class PostService {
    constructor(@InjectModel(TagsPosts) private postRepository: typeof Post) { }

    async createPost(postObject:CreatePostData){
        try{
        await this.tagsPostsRepository.create(postObject);
        return 'Post was successfully created'
        }catch(error){
            return `ERROR: ${error}`;
        }
    }

}
