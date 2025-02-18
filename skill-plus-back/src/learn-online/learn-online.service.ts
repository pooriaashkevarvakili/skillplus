// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LearnOnline } from './entities/learn-online.entity';
interface learnOneInterface {
    title: string;
    img: string;
    description:string
  }
@Injectable()
export class LearnOnlineService {
  constructor(
    @InjectRepository(LearnOnline)
    private readonly questionRepository: Repository<LearnOnline>,
  ) {}

  async findAll(): Promise<LearnOnline[]> {
    return await this.questionRepository.find();
  }

  async create(maharatNarm: LearnOnline): Promise<LearnOnline> {
    return await this.questionRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: LearnOnline[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
        {
          title: "فرآیند مهارت نرم شامل دوره های مربوط به خودشناسی و اصول اولیه ارتباط می باشد که هم به شکل فردی و هم به شکل گروهی قابل دسترسی می باشد . در این دوره ها سعی می شود با تست شخصیت شناسی نقاط قوت و ضعف افراد شناسایی و روی آنها متمرکز و آموزش و یادگیری مرتبط در نظر گرفته شود.",
          img: "https://s32.picofile.com/file/8481262092/Group_1019.png",
          description:"آموزش آنلاین"
        }
       
      ]as learnOneInterface[]
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