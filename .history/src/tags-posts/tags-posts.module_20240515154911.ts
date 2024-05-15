import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports:[
        SequelizeModule.forFeature([TagsPosts])
      ],
      controllers: [],
      providers: [],
      exports
})
export class TagsPosts{}