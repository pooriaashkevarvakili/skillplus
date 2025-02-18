// src/user/services/maharat-narm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './entities/application.entity';
interface applicationInterface {
    title: string;
    img: string;
  }
@Injectable()
export class ApplicationSerivce {
  constructor(
    @InjectRepository(Application)
    private readonly questionRepository: Repository<Application>,
  ) {}

  async findAll(): Promise<Application[]> {
    return await this.questionRepository.find();
  }

  async create(maharatNarm: Application): Promise<Application> {
    return await this.questionRepository.save(maharatNarm);
  }

  async saveData(): Promise<{ message: string; data: Application[] }> {
    const data = {
      message: "پیام با موفقیت انجام شد",
      data: [
        {
          title: "امکان ارتباط انلاین با مشاور  قبل از جلسه",
          img: "https://s32.picofile.com/file/8481253134/Group_189.png"
        },
        {
          title: "مشاوره به ۶ زبان زنده دنیا",
          img: "https://s32.picofile.com/file/8481253234/Group_1023.png"
        },
        {
          title: "مشاوره به ۶۰  تخصصی مختلف",
          img: "https://s32.picofile.com/file/8481253268/Group_1021.png"
        },
        {
          title: "امکان انتخاب جنسیت مشاور",
          img: "https://s32.picofile.com/file/8481253292/Group_197.png"
        },
        {
          title: "بالاترین کیفیت در آموزش",
          img: "https://s32.picofile.com/file/8481253368/Group_186.png"
        },
        {
          title: "تضمین محرمانگی اطلاعات",
          img: "https://s32.picofile.com/file/8481253450/Group_187.png"
        },
        {
          title: "مشاوره در تایم بندی مختلف",
          img: "https://s32.picofile.com/file/8481253534/Group_1020.png"
        }
      ]as applicationInterface[]
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