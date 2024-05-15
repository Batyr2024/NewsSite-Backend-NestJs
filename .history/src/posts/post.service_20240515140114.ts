import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { CreatePostData } from 'src/posts/data/CreatePost.data';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post) private postRepository: typeof Post) { }

    async createPost(postObject){
        try{
        await this.postRepository.create(postObject);
        return 'Post was successfully created'
        }catch(error){
            return `${error;
        }
    }

}
