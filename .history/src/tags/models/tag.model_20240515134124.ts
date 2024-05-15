import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TagCreation {
    id: number;
    nameTag: string;
}

@Belo
@Table({tableName:'tag'})
export class Tag extends Model <Tag, TagCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;

    @Column({type:DataType.STRING, allowNull: false})
    nameTag: string;
}