import { Test, TestingModule } from '@nestjs/testing';
import { SoftSkillProgrammingController } from './soft-skill-programming.controller';
import { SoftSkillProgrammingService } from './soft-skill-programming.service';

describe('SoftSkillProgrammingController', () => {
  let controller: SoftSkillProgrammingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoftSkillProgrammingController],
      providers: [SoftSkillProgrammingService],
    }).compile();

    controller = module.get<SoftSkillProgrammingController>(SoftSkillProgrammingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
