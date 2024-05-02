import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './models/post.model';

@Module({  
  imports:[
    SequelizeModule.forFeature([Post])
  ],
  controllers: [TagController],
  providers: [TagService],

})
export class PostModule {}