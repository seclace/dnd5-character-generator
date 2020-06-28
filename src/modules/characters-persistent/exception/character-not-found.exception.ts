import { NotFoundException } from '@nestjs/common';

export class CharacterNotFoundException extends NotFoundException {
  constructor() {
    super(`character with such id not found`);
  }
}
