import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PostCreation {
    id: number;
    nameTag: string;
}

@Table({tableName:'tag'})
export class Post extends Model <Tag, PostCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;

    @Column({type:DataType.STRING, allowNull: false})
    nameTag: string;
}