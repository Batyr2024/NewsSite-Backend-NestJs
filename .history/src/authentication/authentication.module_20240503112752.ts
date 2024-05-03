import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "module";
import { Sequelize } from "sequelize";
import { User } from "src/users/models/user.model";

@Mo({
    imports:[SequelizeModule.forFeature([User])],

})
export class AuthenticationModule{}