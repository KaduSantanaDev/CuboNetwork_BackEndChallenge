/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async list() {
        const users = await this.prismaService.user.findMany()

        if (!users) {
            throw new BadRequestException()
        }

        return users
    }

    async create({name, lastname, percentage}: CreateUserDto) {
        const userCreated = await this.prismaService.user.create({
            data: {
                name: name,
                last_name: lastname,
                percentage: percentage
            }
        })

        if (!userCreated) {
            throw new BadRequestException
        }

        return userCreated
    }

}
