import { Test, TestingModule } from '@nestjs/testing';
import { PersonconsultationsService } from './personconsultations.service';

describe('PersonconsultationsService', () => {
  let service: PersonconsultationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonconsultationsService],
    }).compile();

    service = module.get<PersonconsultationsService>(PersonconsultationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
