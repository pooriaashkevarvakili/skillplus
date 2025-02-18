// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PadcastService } from './padcast.service';
import { Padcast } from './entities/padcast.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('padcast')
@Controller('padcast')
export class PadcastController {
  constructor(private readonly maharatNarmService: PadcastService) {}

  @Get()
  async findAll(): Promise<Padcast[]> {
    return await this.maharatNarmService.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: Padcast): Promise<Padcast> {
    return await this.maharatNarmService.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: Padcast[] }> {
    return await this.maharatNarmService.saveData();
  }
}