import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "module";
import { Sequelize } from "sequelize";

@Module({
    imports[SequelizeModule.forRoot([A])],

})
export class AuthenticationModule{}