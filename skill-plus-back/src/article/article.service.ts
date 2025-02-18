// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
interface articleInterface {
    title: string;
    img: string;
  }
@Injectable()
export class ArticleSerivce {
  constructor(
    @InjectRepository(Article)
    private readonly questionRepository: Repository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return await this.questionRepository.find();
  }

  async create(maharatNarm: Article): Promise<Article> {
    return await this.questionRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: Article[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
        {
          img: "https://s32.picofile.com/file/8481286392/image_19.png",
          title: "منظور از مقاله کنفرانسی چیست؟"
      },
      {
          img: "https://s32.picofile.com/file/8481286434/image_21.png",
          title: "چگونه یک ارائه و سخنرانی موثر داشته باشیم؟"
      },
      {
          img: "https://s32.picofile.com/file/8481286500/image_20.png",
          title: "چگونه بهترین پکیج را برای سفارش خود انتخاب کنیم؟"
      }
      ]as articleInterface[]
    };
    try {
        const savedItems = await Promise.all(
          data.data.map(item => this.create(item))
        );
      
        return {
            message: "داده‌ها با موفقیت ذخیره شدند",
            data: savedItems
          };
        } catch (error) {
          throw new Error(`خطا در ذخیره داده‌ها: ${error.message}`);
        }
  }
}