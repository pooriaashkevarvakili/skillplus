import { PartialType } from '@nestjs/swagger';
import { CreatePadcastDto } from './create-padcast.dto';

export class UpdatePadcastDto extends PartialType(CreatePadcastDto) {}
