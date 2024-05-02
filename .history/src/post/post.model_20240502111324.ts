import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PostCreation {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
}

@Table({tableName:'post'})
export class Post extends Model <Post, UserCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;

    @Column({type:DataType.STRING, allowNull: false})
    login: string;

    @Column({type:DataType.STRING, allowNull: false})
    password: string;

    @Column({type:DataType.STRING, allowNull: false})
    firstName: string;

    @Column({type:DataType.STRING, allowNull: false})
    lastName: string;
}