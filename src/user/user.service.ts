import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}
    create(createUserDto: CreateUserDto) {
        return this.userRepository.create(createUserDto);
    }

    findAll() {
        return this.userRepository.findAll();
    }

    findOne(id: number) {
        return this.userRepository.findOne(id);
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        console.log("To be implemented")
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        console.log("To be implemented")
        return `This action removes a #${id} user`;
    }
}
