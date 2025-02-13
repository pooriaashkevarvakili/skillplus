import { Body, Controller, Get, HttpStatus, Post, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import data from './data/maharatNarm.json';
import dataOne from './data/learnOnline.json'
import dataTwo from './data/call.json'

import dataThree from './data/applicationMaharatNarm.json'
import dataFour from './data/personconsultations.json'
import dataFive from './data/softSkillProgramming.json'
import dataSix from './data/softSkillServices.json'
import dataSeven from './data/padcast.json'
import dataEight from './data/webinarLearn.json'
import dataNine from './data/buyPackyjes.json'
import dataTen from './data/Trust.json'
import dataEleven from './data/article.json'
import dataTwelve from './data/question.json'
import { NoFilesInterceptor } from '@nestjs/platform-express';
import dataThreeteen from './data/packages.json'
import dataFourteen from './data/callAddress.json'
import {CreateUserDto} from "./dto/create-user.dto"
import { Response } from 'express';

import { CurrentUser } from './auth/current-user.decorator';
import { TokenPayload } from './auth/token-payload.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
  ) {}

  @Get('featuresMaharatNarm')
  getPaymentMethod(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(data);
  }
  @Get('learnOnline')
  learnOnline(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataOne);
  }
  @Get('call')
  call(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataTwo);
  }
  @Get('applicationMaharatNarm')
  applicationMaharatNarm(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataThree);
  }
  @Get('personconsultations')
  personconsultations(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataFour);
  }
  @Get('softSkillProgramming')
  softSkillProgramming(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataFive);
  }
  @Get('softSkillServices')
  softSkillServices(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataSix);
  }
  @Get('padcast')
  padcast(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataSeven);
  }
  @Get('webinarLearn')
  webinarLearn(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataEight);
  }
  @Get('buyPackyjes')
  buyPackyjes(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataNine);
  }
  @Get('trust')
  trust(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataTen);
  }
  @Get('article')
  article(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataEleven);
  }
  @Get('question')
  question(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataTwelve);
  }
  @Get('packages')
  packages(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataThreeteen);
  }
  @Get('callAddress')
  callAddress(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(dataFourteen);
  }
 
  @Get('me')
 
  getme(@CurrentUser()user:TokenPayload){
 return user
  }
   

}
