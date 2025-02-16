import { Test, TestingModule } from '@nestjs/testing';
import { MaharatNarmController } from './maharat-narm.controller';

describe('MaharatNarmController', () => {
  let controller: MaharatNarmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaharatNarmController],
    }).compile();

    controller = module.get<MaharatNarmController>(MaharatNarmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
