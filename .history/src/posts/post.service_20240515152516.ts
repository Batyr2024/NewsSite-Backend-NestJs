import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { CreatePostData } from 'src/posts/data/CreatePost.data';
import { TagsPosts } from 'src/tags-posts/tags-posts.model';

@Injectable()
export class PostService {
    constructor(@InjectModel(TagsPosts) private tagsPostsRepository: typeof Post) { }

    async createPost(postObject:CreatePostData){
        try{
        await this.postRepository.create(postObject);
        return 'Post was successfully created'
        }catch(error){
            return `ERROR: ${error}`;
        }
    }

}
