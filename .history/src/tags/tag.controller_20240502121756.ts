import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateTagData } from './data/CreateTag.data'
import { PostService } from './tag.service';

@Controller('tag')
export class TagController {
    constructor (private todoService: TagService) {}
}