import { Module } from '@nestjs/common';
import { CharactersPersistentModule } from '../characters-persistent/characters-persistent.module';
import { CreateCharacterController } from './create-character.controller';
import { UpdateCharacterController } from './update-character.controller';
import { GetCharacterController } from './get-character.controller';

@Module({
  controllers: [
    CreateCharacterController,
    UpdateCharacterController,
    GetCharacterController,
  ],
  imports: [CharactersPersistentModule],
})
export class CharactersWebModule {}
