import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "module";
import { User } from "src/users/models/user.model";

@Module({
    imports: [SequelizeModule.forFeature([User])],
    controllers: [AuthenticationController],
    providers: [AuthenticationService],
})
export class AuthenticationModule { }