import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { CreatePostData } from 'src/post/CreatePost.data';

@Injectable()
export class UserService {
    constructor(@InjectModel(Post) private userRepository: typeof Post) { }

}
