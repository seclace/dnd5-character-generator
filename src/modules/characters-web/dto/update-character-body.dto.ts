import { PartialType } from '@nestjs/swagger';
import { CreateCharacterBodyDto } from './create-character-body.dto';

export class UpdateCharacterBodyDto extends PartialType(
  CreateCharacterBodyDto,
) {}
