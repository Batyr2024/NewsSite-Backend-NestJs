import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TodoController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './todo.model';

@Module({  
  imports:[
    SequelizeModule.forFeature([Task])
  ],
  controllers: [TodoController],
  providers: [TodoService],

})
export class TodoModule {}