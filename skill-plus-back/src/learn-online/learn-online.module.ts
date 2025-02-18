import { Module } from '@nestjs/common';
import { LearnOnlineService } from './learn-online.service';
import { LearnOnlineController } from './learn-online.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LearnOnline } from './entities/learn-online.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LearnOnline])],
  controllers: [LearnOnlineController],
  providers: [LearnOnlineService],
})
export class LearnOnlineModule {}
