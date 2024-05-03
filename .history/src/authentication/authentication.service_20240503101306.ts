import { CreateUserData } from "src/users/data/CreateUser.data";
import { UserService } from "src/users/user.service";
import { scrypt } from "crypto";

export class AuthenticationService{
    constructor(
        private readonly userService: UserService
      ) {}

      public async register(registrationData:CreateUserData){
        const hashedPassword = await scrypt.hash(registrationData.password, 10);

      }
}