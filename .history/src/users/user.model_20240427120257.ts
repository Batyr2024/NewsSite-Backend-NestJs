import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreation {
    text: string;
}

@Table({tableName:'news'})
export class User extends Model <User, UserCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;

    @Column({type:DataType.STRING, allowNull: false})
    login: string;

    @Column({type:DataType.BOOLEAN, defaultValue: false, allowNull: false})
    : boolean; 
}