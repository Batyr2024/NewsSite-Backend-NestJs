import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreation {
    text: string;
}

@Table({tableName:'tasks'})
export class Task extends Model <Task, userCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;

    @Column({type:DataType.STRING, allowNull: false})
    text: string;

    @Column({type:DataType.BOOLEAN, defaultValue: false, allowNull: false})
    isChecked: boolean; 
}