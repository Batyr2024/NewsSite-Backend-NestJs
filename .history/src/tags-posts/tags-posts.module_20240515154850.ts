import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports:[
        SequelizeModule.forFeature([User])
      ],
      controllers: [UserController],
      providers: [UserService],
})
export class TagsPosts{}