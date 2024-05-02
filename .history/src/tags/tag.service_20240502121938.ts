import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './models/tag.model';
import { CreateTagData } from 'src/tags/data/CreateTag.data';

@Injectable()
export class TagService {
    constructor(@InjectModel(Tag) private userRepository: typeof Tag) { }

}
