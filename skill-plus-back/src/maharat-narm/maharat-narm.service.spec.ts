import { Test, TestingModule } from '@nestjs/testing';
import { MaharatNarmService } from './maharat-narm.service';

describe('MaharatNarmService', () => {
  let service: MaharatNarmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaharatNarmService],
    }).compile();

    service = module.get<MaharatNarmService>(MaharatNarmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
