// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SoftSkillEntity } from './entities/soft-skill-service.entity';
interface softSkill {
    title: string;
    description: string;
    img:string
  }
@Injectable()
export class SoftSkillService {
  constructor(
    @InjectRepository(SoftSkillEntity)
    private readonly questionRepository: Repository<SoftSkillEntity>,
  ) {}

  async findAll(): Promise<SoftSkillEntity[]> {
    return await this.questionRepository.find();
  }

  async create(maharatNarm: SoftSkillEntity): Promise<SoftSkillEntity> {
    return await this.questionRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: SoftSkillEntity[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
        {
          title: "پکیج آموزشی آنلاین و حضوری",
          img: "https://s32.picofile.com/file/8481262984/color_swatch.png",
          description: "منظور از پکیج های آموزشی آنلاین و حضوری :ویدیوهای آموزشی و کاربردی می باشد برای افزایش و ارتقای مهارت های توسعه فردی و ارتباط بهینه در محیط کار"
        },
        {
          title: "مشاوره های آنلاین و حضوری",
          img: "https://s32.picofile.com/file/8481263426/sound.png",
          description: "مشاوره های آنلاین و حضوری ما شامل : راهنمایی های تخصصی جهت داشتن مسیر درست شغلی و حرفه ای و راهبری تیم ها در آینده می باشد"
        }
      ]as softSkill[]
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