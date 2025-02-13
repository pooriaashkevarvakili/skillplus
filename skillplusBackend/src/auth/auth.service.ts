import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcript from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private readonly userRepository:Repository<Auth>
    
  ) {}

  async create( password: string): Promise<User> {
    try {
      const hashedPassword = await bcript.hash(password, 10);
      const user = this.userRepository.create({
        
        password: hashedPassword
      });
      return await this.userRepository.save(user);
    } catch (error) {
      throw new Error('User creation failed');
    }
  }

  find(password:string){
    return this.userRepository.find({
        where:{password}
    })
    }
  
  
}
