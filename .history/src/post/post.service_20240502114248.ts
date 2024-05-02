import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { CreatePostData } from 'src/users/data/CreateUser.data';

@Injectable()
export class Service {
    constructor(@InjectModel(Post) private userRepository: typeof Post) { }

}
