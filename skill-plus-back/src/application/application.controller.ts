// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApplicationSerivce } from './application.service';
import {Application} from './entities/application.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('application')
@Controller('application')
export class ApplicationController {
  constructor(private readonly QuastionSerivce: ApplicationSerivce) {}

  @Get()
  async findAll(): Promise<Application[]> {
    return await this.QuastionSerivce.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: Application): Promise<Application> {
    return await this.QuastionSerivce.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: Application[] }> {
    return await this.QuastionSerivce.saveData();
  }
}