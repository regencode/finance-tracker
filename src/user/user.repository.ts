import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto : CreateUserDto) {
        console.log(dto)
        return await this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email
            }
        });
    }
    async findAll() {
        return await this.prisma.user.findMany();
    }
    async findOne(id: any) {
        return await this.prisma.user.findUnique({
            where: { id },
        });
    }
}
