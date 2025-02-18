import { Module } from '@nestjs/common';
import { SoftSkillProgrammingService } from './soft-skill-programming.service';
import { SoftSkillProgrammingController } from './soft-skill-programming.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoftSkillProgramming } from './entities/soft-skill-programming.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SoftSkillProgramming])],
  controllers: [SoftSkillProgrammingController],
  providers: [SoftSkillProgrammingService],
})
export class SoftSkillProgrammingModule {}
