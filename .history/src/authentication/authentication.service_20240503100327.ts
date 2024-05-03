import { UserService } from "src/users/user.service";

export class AuthenticationService{
    constructor(
        private readonly userService: UserService
      ) {}

      
}