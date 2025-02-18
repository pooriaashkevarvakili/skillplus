// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { LearnOnlineService } from './learn-online.service';
import {LearnOnline} from './entities/learn-online.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('learnonline')
@Controller('learnonline')
export class LearnOnlineController {
  constructor(private readonly QuastionSerivce: LearnOnlineService) {}

  @Get()
  async findAll(): Promise<LearnOnline[]> {
    return await this.QuastionSerivce.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: LearnOnline): Promise<LearnOnline> {
    return await this.QuastionSerivce.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: LearnOnline[] }> {
    return await this.QuastionSerivce.saveData();
  }
}