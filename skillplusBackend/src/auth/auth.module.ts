import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from 'src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Auth]),
  ConfigModule,
    AuthModule],
  controllers: [AuthController],
  providers: [AuthService,AppService],
})
export class AuthModule {}
