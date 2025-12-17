import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto";


@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaClient) {}
    async create(dto : CreateUserDto) {
        return await this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.name
            }
        });
    }
    async findAll() {
        return await this.prisma.user.findMany();
    }
    async findOne(id: any) {
        return await this.prisma.user.findUnique(id);
    }
}
