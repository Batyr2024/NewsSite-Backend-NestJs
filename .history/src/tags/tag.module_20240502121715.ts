import { Module } from '@nestjs/common';
import { PostService } from './tag.service';
import { PostController } from './tag.controller';
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