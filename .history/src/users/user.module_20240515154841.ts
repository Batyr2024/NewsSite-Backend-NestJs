import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Module({  
  @InjectModel(TagsPosts) private tagsPostsRepository: typeof TagsPosts

})
export class UserModule {}