import { Module } from '@nestjs/common';
import { UserService } from './todo.service';
import { TodoController } from './todo.controller';
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