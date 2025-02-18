// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Call } from './entities/call.entity';
interface callInterface {
  title: string;
  img: string;
  description:string
}
@Injectable()
export class CallService {
  constructor(
    @InjectRepository(Call)
    private readonly questionRepository: Repository<Call>,
  ) { }

  async findAll(): Promise<Call[]> {
    return await this.questionRepository.find();
  }

  async create(maharatNarm: Call): Promise<Call> {
    return await this.questionRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: Call[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
      {
          title: "به راهنمایی بیشتری نیاز دارید؟",
          img: "https://s32.picofile.com/file/8481260726/call.png",
          description: "همین الان با کارشناسان مهارت نرم تماس بگیرید"
      }
      ] as callInterface[]
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