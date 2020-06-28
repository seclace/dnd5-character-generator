import { ECharacterClass } from '../../../domain/constants/character-class.constant';
import { ApiProperty } from '@nestjs/swagger';

export class CharacterResponseClass {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number;
  @ApiProperty({ enum: ECharacterClass })
  class_type: ECharacterClass;
}
