// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { Package } from './entities/package.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('packages')
@Controller('packages')
export class PackagesController {
  constructor(private readonly maharatNarmService: PackagesService) {}

  @Get()
  async findAll(): Promise<Package[]> {
    return await this.maharatNarmService.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: Package): Promise<Package> {
    return await this.maharatNarmService.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: Package[] }> {
    return await this.maharatNarmService.saveData();
  }
}