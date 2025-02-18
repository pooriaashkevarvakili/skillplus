// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuestionSerivce } from './question.service';
import {question} from './entities/question.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('question')
@Controller('question')
export class QuastionController {
  constructor(private readonly QuastionSerivce: QuestionSerivce) {}

  @Get()
  async findAll(): Promise<question[]> {
    return await this.QuastionSerivce.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: question): Promise<question> {
    return await this.QuastionSerivce.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: question[] }> {
    return await this.QuastionSerivce.saveData();
  }
}