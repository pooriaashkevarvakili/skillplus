import { Module } from '@nestjs/common';
import { PersonconsultationsService } from './personconsultations.service';
import { PersonconsultationsController } from './personconsultations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personconsultation } from './entities/personconsultation.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Personconsultation])],
  controllers: [PersonconsultationsController],
  providers: [PersonconsultationsService],
})
export class PersonconsultationsModule {}
