import { Test, TestingModule } from '@nestjs/testing';
import { LearnOnlineService } from './learn-online.service';

describe('LearnOnlineService', () => {
  let service: LearnOnlineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearnOnlineService],
    }).compile();

    service = module.get<LearnOnlineService>(LearnOnlineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
