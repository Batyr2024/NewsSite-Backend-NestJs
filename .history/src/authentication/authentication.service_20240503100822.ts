import { CreateUserData } from "src/users/data/CreateUser.data";
import { UserService } from "src/users/user.service";
import 

export class AuthenticationService{
    constructor(
        private readonly userService: UserService
      ) {}

      public async register(registrationData:CreateUserData){
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);

      }
}