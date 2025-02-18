import { PartialType } from '@nestjs/swagger';
import { CreateSoftSkillProgrammingDto } from './create-soft-skill-programming.dto';

export class UpdateSoftSkillProgrammingDto extends PartialType(CreateSoftSkillProgrammingDto) {}
