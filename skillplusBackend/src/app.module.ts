import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth/entities/auth.entity';
@Module({
  imports: [
     
      ConfigModule,
   AuthModule,
   TypeOrmModule.forFeature([Auth]),
   TypeOrmModule.forRoot({
    type:'postgres',
    username:'postgres',
    database:'postgres',
    password:'admin',
    synchronize:true,
    entities:[Auth]
   })
    
  ],
  
  controllers: [AppController,AuthController],
  providers: [AppService,AuthService]
})
export class AppModule { }