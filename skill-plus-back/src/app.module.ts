import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { MaharatNarm } from './user/entities/MaharatNarm.entites';
import { question } from './question/entities/question.entity';
import { MaharatNarmModule } from './maharat-narm/maharat-narm.module';
import { QuestionModule } from './question/question.module';
import { ArticleModule } from './article/article.module';
import { Article } from './article/entities/article.entity';
import {SoftSkillEntity} from './soft-skill-services/entities/soft-skill-service.entity'
import { SoftSkillServicesModule } from './soft-skill-services/soft-skill-services.module';
import { ApplicationModule } from './application/application.module';
import { Application } from './application/entities/application.entity';
import { CallModule } from './call/call.module';
import { Call } from './call/entities/call.entity';
import { LearnOnlineModule } from './learn-online/learn-online.module';
import { LearnOnline } from './learn-online/entities/learn-online.entity';
import { PackagesModule } from './packages/packages.module';
import { Package } from './packages/entities/package.entity';
import { PadcastModule } from './padcast/padcast.module';
import { Padcast } from './padcast/entities/padcast.entity';
import { PersonconsultationsModule } from './personconsultations/personconsultations.module';
import { Personconsultation } from './personconsultations/entities/personconsultation.entity';
import { SoftSkillProgrammingModule } from './soft-skill-programming/soft-skill-programming.module';
import { SoftSkillProgramming } from './soft-skill-programming/entities/soft-skill-programming.entity';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'Pr@3117#3',
      database:'postgres',
      synchronize:true,
      entities:[User,MaharatNarm,question,Article,SoftSkillEntity,Application,Call,LearnOnline,Package,Padcast,Personconsultation,SoftSkillProgramming]
    }),
    UserModule,
    MaharatNarmModule,
    QuestionModule,
    ArticleModule,
    SoftSkillServicesModule,
    ApplicationModule,
    CallModule,
    LearnOnlineModule,
    PackagesModule,
    PadcastModule,
    PersonconsultationsModule,
    SoftSkillProgrammingModule,
   
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
