import { CharacterEntity, CharacterId } from '../../entities/character.entity';

export interface LoadCharacterPort {
  loadCharacter(characterId: CharacterId): Promise<CharacterEntity>;
}
