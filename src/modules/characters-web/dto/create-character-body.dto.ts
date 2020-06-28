import { IsEnum, IsNumber, IsString, Min } from 'class-validator';
import { ECharacterClass } from '../../../domain/constants/character-class.constant';

export class CreateCharacterBodyDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(1)
  age: number;

  @IsEnum(ECharacterClass)
  class_type: ECharacterClass;
}
