import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreation {
    idPost:number,
    idTags:number, 
}

@Table({tableName:'tags-posts'})
export class User extends Model <User, UserCreation>{
    @Column({type:DataType.INTEGER,id allowNull: false})
    idPosts: number;
    @Column({type:DataType.INTEGER,id allowNull: false})
    idTags: number;
}