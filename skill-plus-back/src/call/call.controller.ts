// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CallService } from './call.service';
import {Call} from './entities/call.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('call')
@Controller('call')
export class CallController {
  constructor(private readonly QuastionSerivce: CallService) {}

  @Get()
  async findAll(): Promise<Call[]> {
    return await this.QuastionSerivce.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: Call): Promise<Call> {
    return await this.QuastionSerivce.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: Call[] }> {
    return await this.QuastionSerivce.saveData();
  }
}