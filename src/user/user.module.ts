import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [PrismaService],
    controllers: [
        UserController,],
    providers: [
        UserService,],
})
export class UserModule { }
