import { PartialType } from '@nestjs/swagger';
import { CreateSoftSkillServiceDto } from './create-soft-skill-service.dto';

export class UpdateSoftSkillServiceDto extends PartialType(CreateSoftSkillServiceDto) {}
