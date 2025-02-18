// src/maharat-narm/maharat-narm.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ArticleSerivce } from './article.service';
import {Article} from './entities/article.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('article')
@Controller('article')
export class ArticleController {
  constructor(private readonly QuastionSerivce: ArticleSerivce) {}

  @Get()
  async findAll(): Promise<Article[]> {
    return await this.QuastionSerivce.findAll();
  }

  @Post()
  async create(@Body() maharatNarm: Article): Promise<Article> {
    return await this.QuastionSerivce.create(maharatNarm);
  }

  @Post('save-data') // اضافه کردن endpoint جدید
  async saveData(): Promise<{ message: string; data: Article[] }> {
    return await this.QuastionSerivce.saveData();
  }
}