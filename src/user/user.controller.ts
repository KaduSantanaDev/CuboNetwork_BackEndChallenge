/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async list() {
        this.userService.list
    }
    
    @Post()
    async create(user: CreateUserDto) {
        this.userService.create(user)
    }
}
