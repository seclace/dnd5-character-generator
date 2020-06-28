import { CharacterEntity } from '../../entities/character.entity';

export interface CreateCharacterPort {
  createCharacter(character: CharacterEntity): Promise<CharacterEntity>;
}
