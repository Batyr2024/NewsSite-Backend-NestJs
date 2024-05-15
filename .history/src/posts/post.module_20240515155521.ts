import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { TagsPostsModule } from 'src/tags-posts/tags-posts.module';
import { TagsPosts } from 'src/tags-posts/tags-posts.model';

@Module({  
  imports:[
    SequelizeModule.forFeature([TagsPosts])
  ],
  controllers: [PostController],
  providers: [PostService],

})
export class PostModule {}