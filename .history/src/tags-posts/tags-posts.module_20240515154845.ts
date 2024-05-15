import { Module } from "@nestjs/common";

@Module({
    imports:[
        SequelizeModule.forFeature([User])
      ],
      controllers: [UserController],
      providers: [UserService],
})
export class TagsPosts{}