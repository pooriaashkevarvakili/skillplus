import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';

import * as bcript from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository:Repository<User>
    
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {


    try {
        const hashedPassword = await bcript.hash(createUserDto.password, 10);
        const user = this.userRepository.create({
            email: createUserDto.email,
            username: createUserDto.username,
            password: hashedPassword,
            name: createUserDto.name,
            family: createUserDto.family
        });

        return await this.userRepository.save(user);
    } catch (error) {
        throw new InternalServerErrorException('خطا در ذخیره کاربر');
    }
}

  find(password:string,email:string,username:string){
    return this.userRepository.find({
        where:{password,email,username}
    })
    }
  
  
}
