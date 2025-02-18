import { Module } from '@nestjs/common';
import { CallService } from './call.service';
import { CallController } from './call.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Call } from './entities/call.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Call])],
  controllers: [CallController],
  providers: [CallService],
})
export class CallModule {}
