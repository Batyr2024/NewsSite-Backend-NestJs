import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostData } from 'src/posts/data/CreatePost.data';
import { Post } from './models/post.model';
import { TagService } from 'src/tags/tag.service';
import { TagsPostsService } from 'src/tags-posts/tags-posts.service';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post) private postRepository: typeof Post,private tagService:TagService,private tagsPostsService:TagsPostsService) { }

    async createPost(postObject:CreatePostData,){
        try{
            let Post:Post;
            const post = await this.postRepository.create(postObject)
            .then((data:Post)=>{Post=data});
            const tag = this.tagService.getIdTagsByPost(postObject.tag)
            .then(async (Tags)=>{
                if(typeof Tags === 'object' && Tags !== null||undefined){
                Tags.forEach(async (elementId:number)=>  await this.tagsPostsService.createAssociationTagsPosts(Post.id,elementId))
            }
            })
                 return 'Post was successfully created';
                 
        }catch(error){
            return `ERROR: ${error}`;
        }
    }

}
