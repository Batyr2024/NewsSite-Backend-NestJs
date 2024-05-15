import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { CreatePostData } from 'src/posts/data/CreatePost.data';

@Injectable()
export class PostService {
    constructor(@InjectModel(PostsTags) private PostTags: typeof Post) { }

    async createPost(postObject:CreatePostData){
        try{
        await this.postRepository.create(postObject);
        return 'Post was successfully created'
        }catch(error){
            return `ERROR: ${error}`;
        }
    }

}
