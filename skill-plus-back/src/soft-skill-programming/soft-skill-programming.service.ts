// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SoftSkillProgramming } from './entities/soft-skill-programming.entity';
interface MaharatNarmData {
    title: string;
    description: string;
    img:string
  }
@Injectable()
export class SoftSkillProgrammingService {
  constructor(
    @InjectRepository(SoftSkillProgramming)
    private readonly maharatNarmRepository: Repository<SoftSkillProgramming>,
  ) {}

  async findAll(): Promise<SoftSkillProgramming[]> {
    return await this.maharatNarmRepository.find();
  }

  async create(maharatNarm: SoftSkillProgramming): Promise<SoftSkillProgramming> {
    return await this.maharatNarmRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: SoftSkillProgramming[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
        {
          title: "با توجه به تیم فنی و دانش تکنولوژی تیم ما در این زمینه و شناخت از مشکلات این قشر از افراد یکی از قابلیت های ما ارائه راهکارهای بهینه برای ارتباط سازنده تر در این زمینه می باشد .این بخش از خدمات ما کاملا با جزییات در حوزه فناوری گره خورده و آفر های جذابی را ارائه می دهیم .",
          img: "https://s32.picofile.com/file/8481262792/EilaIstration.png",
          description:"مهارت نرم در حوزه برنامه نویسی"
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