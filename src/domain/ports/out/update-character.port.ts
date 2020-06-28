import { CharacterEntity, CharacterId } from '../../entities/character.entity';

export interface UpdateCharacterPort {
  updateCharacter(
    characterId: CharacterId,
    character: CharacterEntity,
  ): Promise<CharacterEntity>;
}
