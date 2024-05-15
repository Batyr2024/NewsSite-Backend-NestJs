import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/models/post.model";
import { Tag } from "src/tags/models/tag.model";

interface TagsPostsCreation {
    idPost:number,
    idTags:number, 
}


@Table({tableName:'tags-posts'})
export class TagsPosts extends Model <TagsPosts, TagsPostsCreation>{
    @ForeignKey(()=>Post)
    @Column({type:DataType.INTEGER})
    idPosts: number;

    @ForeignKey(()=>Tag)
    @Column({type:DataType.INTEGER})
    idTags: number;
}