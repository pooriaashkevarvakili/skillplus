// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { question } from '../question/entities/question.entity';
interface questionInterface {
    title: string;
    description: string;
  }
@Injectable()
export class QuestionSerivce {
  constructor(
    @InjectRepository(question)
    private readonly questionRepository: Repository<question>,
  ) {}

  async findAll(): Promise<question[]> {
    return await this.questionRepository.find();
  }

  async create(maharatNarm: question): Promise<question> {
    return await this.questionRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: question[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
        {
          title: "پکیج ها بازگشت وجه یا   گارانتی دارند؟",
          description: "آیا مهارت های نرم و توسعه فردی فقط به شکل آنلاین می باشد؟"
      },
      {
          title: "آیا مشاور حضوری هم دارید؟",
          description: "تنوع در دوره ها وجود دارد ؟"
      },
      {
          title: "آیا مکمل آموزشی وجود دارد مثل کتاب و فیلم و...؟"
      }
      ]as questionInterface[]
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