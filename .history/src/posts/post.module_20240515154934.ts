import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { TagsPosts } from 'src/tags-posts/tags-posts.module';

@Module({  
  imports:[
    SequelizeModule.forFeature([Post]),
    TagsPostsM
  ],
  controllers: [PostController],
  providers: [PostService],

})
export class PostModule {}