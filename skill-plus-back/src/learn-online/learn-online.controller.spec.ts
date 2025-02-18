import { Test, TestingModule } from '@nestjs/testing';
import { LearnOnlineController } from './learn-online.controller';
import { LearnOnlineService } from './learn-online.service';

describe('LearnOnlineController', () => {
  let controller: LearnOnlineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearnOnlineController],
      providers: [LearnOnlineService],
    }).compile();

    controller = module.get<LearnOnlineController>(LearnOnlineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
