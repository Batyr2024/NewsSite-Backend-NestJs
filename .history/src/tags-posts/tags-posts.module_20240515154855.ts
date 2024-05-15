import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports:[
        SequelizeModule.forFeature([])
      ],
      controllers: [UserController],
      providers: [UserService],
})
export class TagsPosts{}