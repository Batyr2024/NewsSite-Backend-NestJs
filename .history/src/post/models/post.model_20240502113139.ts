import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PostCreation {
    @Column({type:DataType.INTEGERallowNull: false, primaryKey: true})
    id: number;

    @Column({type:D
    content: string;

    @Column({type:D
    topic: string;

    @Column({type:Da
    idPostUser: number;
    idTags: number;
    picture: string;
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