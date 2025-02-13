import { UsePipes,ValidationPipe,Controller,  Post, Body, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';

import {CreateUserDto} from '../dto/create-user.dto'
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { ApiResponse } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/dto/update-user.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'Successful login',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            token: { type: 'string' },
          },
        },
      },
    },
  })
  @ApiResponse({ 
    status: 401,
    description: 'not auth', 
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
      },
    },
  })
  @ApiResponse({ 
    status: 400,
    description: 'Bad request', 
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
      },
    },
  })
  @Post('login')
  async login(@Body() loginDto:UpdateUserDto) {
this.authService.create(loginDto.password)
  }
   @Post('signup')
    @UseInterceptors(NoFilesInterceptor())
    createUser(@Body() request:CreateUserDto){
   this.authService.find(request.password)
    }
}
