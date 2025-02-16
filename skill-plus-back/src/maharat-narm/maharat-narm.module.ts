import { Module } from '@nestjs/common';
import { MaharatNarmService } from './maharat-narm.service';
import { MaharatNarmController } from './maharat-narm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaharatNarm } from 'src/user/entities/MaharatNarm.entites';

@Module({
  imports:[TypeOrmModule.forFeature([MaharatNarm])],
  providers: [MaharatNarmService],
  controllers: [MaharatNarmController]
})
export class MaharatNarmModule {}
