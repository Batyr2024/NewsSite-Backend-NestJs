import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({  
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService],

})
export class UserModule {}