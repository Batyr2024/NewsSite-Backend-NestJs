import { Module } from '@nestjs/common';
import { PostService } from './user.service';
import { PostController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Module({  
  imports:[
    SequelizeModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService],

})
export class UserModule {}