import { Body, Controller, Get, HttpStatus, Post, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import dataFourteen from './data/callAddress.json'
import {CreateUserDto} from "./dto/create-user.dto"
import { Response } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('callAddress')
  callAddress(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataFourteen);
  }
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      console.error('خطا در ثبت‌نام:', error);
      throw error;
    }
  }
   @Post('login')
    login(@Body() request:UpdateUserDto){
   this.userService.find(request.password,request.email,request.username)
    }
}
