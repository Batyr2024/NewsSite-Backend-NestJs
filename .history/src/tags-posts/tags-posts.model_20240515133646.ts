import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreation {
    idPost:number,
    idTags:number, 
}

@Table({tableName:'user'})
export class User extends Model <User, UserCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;
}