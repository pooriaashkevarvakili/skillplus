import { Module } from '@nestjs/common';
import { SoftSkillService } from './soft-skill-services.service';
import { SoftskillController } from './soft-skill-services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoftSkillEntity } from './entities/soft-skill-service.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SoftSkillEntity])],
  controllers: [SoftskillController],
  providers: [SoftSkillService],
})
export class SoftSkillServicesModule {}
