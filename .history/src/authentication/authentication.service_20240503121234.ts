import { CreateUserData } from "src/users/data/CreateUser.data";
import { UserService } from "src/users/user.service";
import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "src/users/models/user.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class AuthenticationService {
    constructor(@InjectModel(User) private userRepository: typeof User) { }

    async register(registrationData: CreateUserData) {
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        try {
            const createdUser = await this.userRepository.create({
                ...registrationData,
                password: hashedPassword
            });
            createdUser.password = undefined;
            return createdUser;
        } catch (error) { throw new HttpException(error, HttpStatus.BAD_REQUEST); }
    }

    async getAuthenticatedUser(login: string, plainTextPassword: string) {
        try {
            const user = await this.userRepository.findOne({where:{login}});
            console.log(user)
            await this.verifyPassword(plainTextPassword, user.password);
            user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    private async verifyPassword(plainTextPassword:string,hashedPassword:string){
        const isPasswordMatching = await bcrypt.compare(
            plainTextPassword,
            hashedPassword
          );
          if (!isPasswordMatching) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
          }
    }
}

