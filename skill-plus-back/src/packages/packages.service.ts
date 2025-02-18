// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Package } from './entities/package.entity';
interface MaharatNarmData {
    title: string;
    description: string;
  }
@Injectable()
export class PackagesService {
  constructor(
    @InjectRepository(Package)
    private readonly maharatNarmRepository: Repository<Package>,
  ) {}

  async findAll(): Promise<Package[]> {
    return await this.maharatNarmRepository.find();
  }

  async create(maharatNarm: Package): Promise<Package> {
    return await this.maharatNarmRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: Package[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
        {
          title: "سفارش پکیج دارید؟",
          description: "همین حالا و با چند کلیک سفارش بسته آموزشی  خود را ایجاد کنید"
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