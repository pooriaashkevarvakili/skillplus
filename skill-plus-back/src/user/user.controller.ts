import { Body, Controller, Get, HttpStatus, Post, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import dataFourteen from './data/callAddress.json'
import data from "./data/contact.json"
import {CreateUserDto} from "./dto/create-user.dto"
import { Response } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import dataOne from './data/call.json'
import dataTwo from './data/softskillPrograming.json'
import dataThree from "./data/mahararatNarm.json"
import dataFour from "./data/softskillServices.json"
import dataFive from "./data/question.json"
import dataSix from "./data/personConsulations.json"
import dataSeven from './data/padcast.json'
import dataEight from "./data/packages.json"
import dataNine from './data/learn-online.json'
import dataTen from './data/application.json'
import dataEleven from "./data/webinarLearn.json"
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('callAddress')
  callAddress(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataFourteen);
  }
  @Get('contact')
  contact(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(data);
  }
  @Get('contact')
  call(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataOne);
  }
  @Get('softskillprogramming')
  softskillprogramming(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataTwo);
  }
  @Get('maharatNarm')
  maharatNarm(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataThree);
  }
  @Get('softskillServices')
  softskillServices(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataFour);
  }
  @Get('question')
  question(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataFive);
  }
  @Get('personConsulations')
  personConsulations(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataSix);
  }
  @Get('padcast')
  padcast(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataSeven);
  }
  @Get('packjes')
  packjes(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataEight);
  }
  @Get('learnonline')
  learnOnline(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataNine);
  }
  @Get('application')
  application(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataTen);
  }
  @Get('webniarLearn')
  webniarLearn(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataEleven);
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
