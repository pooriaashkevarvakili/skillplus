// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuastionSerivce } from './question.service';
import { MaharatNarm } from '../user/entities/MaharatNarm.entites';

@Controller('quastion')
export class QuastionController {
  constructor(private readonly QuastionSerivce: QuastionSerivce) {}

  @Get()
  async findAll(): Promise<MaharatNarm[]> {
    return await this.QuastionSerivce.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: MaharatNarm): Promise<MaharatNarm> {
    return await this.QuastionSerivce.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: MaharatNarm[] }> {
    return await this.QuastionSerivce.saveData();
  }
}