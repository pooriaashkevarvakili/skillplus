import { Module } from '@nestjs/common';
import { PadcastService } from './padcast.service';
import { PadcastController } from './padcast.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Padcast } from './entities/padcast.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Padcast])],
  controllers: [PadcastController],
  providers: [PadcastService],
})
export class PadcastModule {}
