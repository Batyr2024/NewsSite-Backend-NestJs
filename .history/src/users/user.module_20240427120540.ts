import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './todo.model';

@Module({  
  imports:[
    SequelizeModule.forFeature([Task])
  ],
  controllers: [UserControllerController],
  providers: [TodoService],

})
export class TodoModule {}