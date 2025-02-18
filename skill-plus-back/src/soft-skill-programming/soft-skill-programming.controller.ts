// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { SoftSkillProgrammingService } from './soft-skill-programming.service';
import { SoftSkillProgramming } from './entities/soft-skill-programming.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('SoftSkillProgramming')
@Controller('SoftSkillProgramming')
export class SoftSkillProgrammingController {
  constructor(private readonly maharatNarmService: SoftSkillProgrammingService) {}

  @Get()
  async findAll(): Promise<SoftSkillProgramming[]> {
    return await this.maharatNarmService.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: SoftSkillProgramming): Promise<SoftSkillProgramming> {
    return await this.maharatNarmService.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: SoftSkillProgramming[] }> {
    return await this.maharatNarmService.saveData();
  }
}