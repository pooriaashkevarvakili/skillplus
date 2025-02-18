// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PersonconsultationsService } from './personconsultations.service';
import { Personconsultation } from './entities/personconsultation.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('personconsultationsService')
@Controller('personconsultationsService')
export class PersonconsultationsController {
  constructor(private readonly maharatNarmService: PersonconsultationsService) {}

  @Get()
  async findAll(): Promise<Personconsultation[]> {
    return await this.maharatNarmService.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: Personconsultation): Promise<Personconsultation> {
    return await this.maharatNarmService.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: Personconsultation[] }> {
    return await this.maharatNarmService.saveData();
  }
}