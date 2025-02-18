import { Test, TestingModule } from '@nestjs/testing';
import { PadcastService } from './padcast.service';

describe('PadcastService', () => {
  let service: PadcastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PadcastService],
    }).compile();

    service = module.get<PadcastService>(PadcastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
