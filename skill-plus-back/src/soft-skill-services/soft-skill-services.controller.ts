// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { SoftSkillService } from './soft-skill-services.service';
import {SoftSkillEntity} from './entities/soft-skill-service.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('softskill')
@Controller('softskill')
export class SoftskillController {
  constructor(private readonly QuastionSerivce: SoftSkillService) {}

  @Get()
  async findAll(): Promise<SoftSkillEntity[]> {
    return await this.QuastionSerivce.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: SoftSkillEntity): Promise<SoftSkillEntity> {
    return await this.QuastionSerivce.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: SoftSkillEntity[] }> {
    return await this.QuastionSerivce.saveData();
  }
}