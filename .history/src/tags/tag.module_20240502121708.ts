import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tag } from './models/tag.model';

@Module({  
  imports:[
    SequelizeModule.forFeature([Tag])
  ],
  controllers: [TagController],
  providers: [TagService],

})
export class TagModule {}