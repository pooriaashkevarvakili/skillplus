import { PartialType } from '@nestjs/swagger';
import { CreatePersonconsultationDto } from './create-personconsultation.dto';

export class UpdatePersonconsultationDto extends PartialType(CreatePersonconsultationDto) {}
