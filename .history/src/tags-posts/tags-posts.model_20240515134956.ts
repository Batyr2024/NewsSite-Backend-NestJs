import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/models/post.model";
import { Tag } from "src/tags/models/tag.model";

interface TagsPostsCreation {
    idPost:number,
    idTags:number, 
}


@Table({tableName:'tags-posts'})
export class TagsPosts extends Model <TagsPosts, TagsPostsCreation>{
    
    @Column({type:DataType.INTEGER})
    idPosts: number;
    @Column({type:DataType.INTEGER})
    idTags: number;
}