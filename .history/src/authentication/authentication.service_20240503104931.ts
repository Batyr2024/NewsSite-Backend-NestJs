import { CreateUserData } from "src/users/data/CreateUser.data";
import { UserService } from "src/users/user.service";
import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus } from "@nestjs/common";

export class AuthenticationService {
    constructor(
        private readonly userService: UserService
    ) { }

   stati public async register(registrationData: CreateUserData) {
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        try {
            const createdUser = await this.userService.addNewUser({
                ...registrationData,
                password: hashedPassword
            });
            createdUser.password = undefined;
            return createdUser;
        } catch (error) { throw new HttpException(error, HttpStatus.BAD_REQUEST); }
    }

    public async getAuthenticatedUser(login: string, plainTextPassword: string) {
        try {
            const user = await this.userService.getByLogin(login);
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

