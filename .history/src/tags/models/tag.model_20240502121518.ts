import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PostCreation {
    id: number;
    nameTag: string;
}

@Table({tableName:'post'})
export class Post extends Model <Post, PostCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;

    @Column({type:DataType.STRING, allowNull: false})
    content: string;

    @Column({type:DataType.STRING, allowNull: false})
    topic: string;

    @Column({type:DataType.INTEGER, allowNull: false})
    idPostUser: number;

    @Column({type:DataType.INTEGER})
    idTags: number;

    @Column({type:DataType.STRING})
    picture: string;
}