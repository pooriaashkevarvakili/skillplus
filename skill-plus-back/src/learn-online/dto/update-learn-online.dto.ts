import { PartialType } from '@nestjs/swagger';
import { CreateLearnOnlineDto } from './create-learn-online.dto';

export class UpdateLearnOnlineDto extends PartialType(CreateLearnOnlineDto) {}
