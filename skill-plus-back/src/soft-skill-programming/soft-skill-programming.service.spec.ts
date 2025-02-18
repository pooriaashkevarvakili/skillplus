import { Test, TestingModule } from '@nestjs/testing';
import { SoftSkillProgrammingService } from './soft-skill-programming.service';

describe('SoftSkillProgrammingService', () => {
  let service: SoftSkillProgrammingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftSkillProgrammingService],
    }).compile();

    service = module.get<SoftSkillProgrammingService>(SoftSkillProgrammingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
