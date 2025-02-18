// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personconsultation } from './entities/personconsultation.entity';
interface MaharatNarmData {
    title: string;
    description: string;
    img:string
  }
@Injectable()
export class PersonconsultationsService {
  constructor(
    @InjectRepository(Personconsultation)
    private readonly maharatNarmRepository: Repository<Personconsultation>,
  ) {}

  async findAll(): Promise<Personconsultation[]> {
    return await this.maharatNarmRepository.find();
  }

  async create(maharatNarm: Personconsultation): Promise<Personconsultation> {
    return await this.maharatNarmRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: Personconsultation[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
        {
          title: "مشاوره های خصوصی ما با ارجاع  افراد به بهترین روانشناس های مجرب در سطح تهران  انجام می گیردمشاوران داری پروانه بهداشت و سابقه کار طولانی و تخصص بروز  می باشندحوزه های مشاوران شامل: مشاوره شغلی ، مشاوره فردی ، مشاوره گروهی، مشاوره اعتماد به نفس و ...از جمله خدماتی می باشند برای افراد در نظر گرفته شده است.",
          img: "https://s32.picofile.com/file/8481262268/Group.png",
          description:"مشاوره های حضوری"
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