import { Test, TestingModule } from '@nestjs/testing';
import { PadcastController } from './padcast.controller';
import { PadcastService } from './padcast.service';

describe('PadcastController', () => {
  let controller: PadcastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PadcastController],
      providers: [PadcastService],
    }).compile();

    controller = module.get<PadcastController>(PadcastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
