import { CreateUserData } from "src/users/data/CreateUser.data";
import { UserService } from "src/users/user.service";
import * as bcrypt from 'bcrypt';

export class AuthenticationService{
    constructor(
        private readonly userService: UserService
      ) {}

      public async register(registrationData:CreateUserData){
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        try{
            const createdUser = await this.userService.addNewUser({
                ...registrationData,
                password: hashedPassword
            });
            createdUser.password = undefined;
            return createdUser;
        }catch(error){
            if (error?.  code===PostgresErrorCode. 
                throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
              }
              throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
      }
}