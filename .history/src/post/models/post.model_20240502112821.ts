import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PostCreation {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
}

@Table({tableName:'post'})
export class Post extends Model <Post, PostCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;

    @Column({type:DataType.STRING, allowNull: false})
    content: string;

    @Column({type:DataType.STRING, allowNull: false})
    topic: string;

    @Column({type:DataType.STRING, allowNull: false})
    postUser: string;

    @Column({type:DataType.STRING, allowNull: false})
    lastName: string;
}