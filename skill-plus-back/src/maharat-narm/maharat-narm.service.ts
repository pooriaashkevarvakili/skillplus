// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaharatNarm } from '../user/entities/MaharatNarm.entites';
interface MaharatNarmData {
    title: string;
    img: string;
  }
@Injectable()
export class MaharatNarmService {
  constructor(
    @InjectRepository(MaharatNarm)
    private readonly maharatNarmRepository: Repository<MaharatNarm>,
  ) {}

  async findAll(): Promise<MaharatNarm[]> {
    return await this.maharatNarmRepository.find();
  }

  async create(maharatNarm: MaharatNarm): Promise<MaharatNarm> {
    return await this.maharatNarmRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: MaharatNarm[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
        {
          title: "مهارت نرم برای مهاجرت",
          img: "https://s32.picofile.com/file/8481260926/airplane.png"
        },
        {
          title: "جلسات مصاحبه",
          img: "https://s32.picofile.com/file/8481261042/judge.png"
        },
        {
          title: "سخنرانی وارائه ها",
          img: "https://s32.picofile.com/file/8481261100/presention_chart.png"
        },
        {
          title: "کارگاه های آموزشی",
          img: "https://s32.picofile.com/file/8481261168/teacher.png"
        },
        {
          title: "همایش های بین المللی",
          img: "https://s32.picofile.com/file/8481261200/global_refresh.png"
        },
        {
          title: "همایش های حضوری",
          img: "https://s32.picofile.com/file/8481261226/bank.png"
        }
      ]as MaharatNarmData[]
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