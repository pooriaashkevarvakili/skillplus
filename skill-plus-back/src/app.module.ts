import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { MaharatNarm } from './user/entities/MaharatNarm.entites';
import { question } from './question/entities/question.entity';
import { MaharatNarmModule } from './maharat-narm/maharat-narm.module';
import { QuestionModule } from './question/question.module';
@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'admin',
      database:'postgres',
      synchronize:true,
      entities:[User,MaharatNarm,question]
    }),
    UserModule,
    MaharatNarmModule,
    QuestionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
