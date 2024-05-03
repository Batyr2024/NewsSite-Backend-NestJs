import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateUserData } from './data/CreateUser.data'
import { UserService } from './user.service';
import { AuthenticationService } from 'src/authentication/authentication.service';

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {}

    @Post()
    addNewUser(@Body() userData: CreateUserData){
        AuthenticationService.register()
    }
}