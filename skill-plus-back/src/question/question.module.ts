import { Module } from '@nestjs/common';
import { QuestionSerivce } from './question.service';
import { QuastionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { question } from 'src/question/entities/question.entity';

@Module({
    imports:[TypeOrmModule.forFeature([question])],
  controllers: [QuastionController],
  providers: [QuestionSerivce],
})
export class QuestionModule {}
