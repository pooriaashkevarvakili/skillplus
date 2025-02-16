// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { MaharatNarmService } from './maharat-narm.service';
import { MaharatNarm } from '../user/entities/MaharatNarm.entites';

@Controller('maharat-narm')
export class MaharatNarmController {
  constructor(private readonly maharatNarmService: MaharatNarmService) {}

  @Get()
  async findAll(): Promise<MaharatNarm[]> {
    return await this.maharatNarmService.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: MaharatNarm): Promise<MaharatNarm> {
    return await this.maharatNarmService.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: MaharatNarm[] }> {
    return await this.maharatNarmService.saveData();
  }
}