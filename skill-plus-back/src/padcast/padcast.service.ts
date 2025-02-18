// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Padcast } from './entities/padcast.entity';
interface MaharatNarmData {
    title: string;
    img: string;
    description:string
  }
@Injectable()
export class PadcastService {
  constructor(
    @InjectRepository(Padcast)
    private readonly maharatNarmRepository: Repository<Padcast>,
  ) {}

  async findAll(): Promise<Padcast[]> {
    return await this.maharatNarmRepository.find();
  }

  async create(maharatNarm: Padcast): Promise<Padcast> {
    return await this.maharatNarmRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: Padcast[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
        {
          
          title: "پادکست آموزشی",
          description: "این آیتم آموزشی سعی بر این دارد که با توجه به زمانبندی مشخص از افراد با تجربه دعوت به گفتگو شود تا تجارب خودشون رو با ما در میان بزارند تا بتوانیم دیدی بهتری نسبت به مباحث مهارت های نرم داشته باشیم.",
          img: "https://s32.picofile.com/file/8481264792/Group_997.png"
        },
       
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