import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "module";
import { Sequelize } from "sequelize";

@Module({
    imports[SequelizeModule.forFeature()],

})
export class AuthenticationModule{}