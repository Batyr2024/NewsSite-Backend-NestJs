import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TagsPosts } from "./tags-posts.model";

@Module({
    imports:[
        SequelizeModule.forFeature([TagsPosts])
      ],
      controllers: [],
      providers: [],
      model:Ta
      exports: [TagsPosts]
})
export class TagsPostsModule{}