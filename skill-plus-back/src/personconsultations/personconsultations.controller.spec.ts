import { Test, TestingModule } from '@nestjs/testing';
import { PersonconsultationsController } from './personconsultations.controller';
import { PersonconsultationsService } from './personconsultations.service';

describe('PersonconsultationsController', () => {
  let controller: PersonconsultationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonconsultationsController],
      providers: [PersonconsultationsService],
    }).compile();

    controller = module.get<PersonconsultationsController>(PersonconsultationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
