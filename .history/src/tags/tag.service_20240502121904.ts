import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Po } from './models/post.model';
import { CreatePostData } from 'src/posts/data/CreatePost.data';

@Injectable()
export class TagService {
    constructor(@InjectModel(Post) private userRepository: typeof Post) { }

}
