import { CreateUserData } from './data/CreateUser.data';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    addNewUser(userData: CreateUserData): Promise<import("./models/user.model").User>;
}
