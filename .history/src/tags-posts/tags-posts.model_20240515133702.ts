import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreation {
    idPost:number,
    idTags:number, 
}

@Table({tableName:'Tag'})
export class User extends Model <User, UserCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    idPosts: number;
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    idTags: number;
}