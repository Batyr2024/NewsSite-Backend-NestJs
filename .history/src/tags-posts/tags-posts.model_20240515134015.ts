import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/models/post.model";

interface UserCreation {
    idPost:number,
    idTags:number, 
}

@Table({tableName:'tags-posts'})
export class User extends Model <User, UserCreation>{
    @Column({type:DataType.INTEGER,references: {
      model: Post, // 'Movies' would also work
      key: 'id',
    }, allowNull: false})
    idPosts: number;
    @Column({type:DataType.INTEGER,references: {
      model: Movie, // 'Movies' would also work
      key: 'id',
    }, allowNull: false})
    idTags: number;
}