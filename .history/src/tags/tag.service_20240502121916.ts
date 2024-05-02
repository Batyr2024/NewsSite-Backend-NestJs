import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './models/post.model';
import { CreatePostData } from 'src/posts/data/CreatePost.data';

@Injectable()
export class TagService {
    constructor(@InjectModel(Tag) private userRepository: typeof Tag) { }

}
