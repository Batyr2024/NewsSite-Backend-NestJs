import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/models/post.model";
import { Tag } from "src/tags/models/tag.model";

interface UserCreation {
    idPost:number,
    idTags:number, 
}

@bel
@Table({tableName:'tags-posts'})
export class User extends Model <User, UserCreation>{
    @Column({type:DataType.INTEGER,references: {model: Post,key: 'id',}, allowNull: false})
    idPosts: number;
    @Column({type:DataType.INTEGER,references: {model: Tag,key: 'id',}, allowNull: false})
    idTags: number;
}