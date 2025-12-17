import { PrismaClient } from "@prisma/client";
import { OnModuleInit, OnModuleDestroy } from "@nestjs/common";

export class PrismaService extends PrismaClient
implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        return this.$connect()
    }
    async onModuleDestroy() {
        return this.$disconnect() 
    }
}
