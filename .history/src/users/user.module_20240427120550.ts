import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import {  } from './todo.model';

@Module({  
  imports:[
    SequelizeModule.forFeature([Task])
  ],
  controllers: [UserController],
  providers: [UserService],

})
export class TodoModule {}