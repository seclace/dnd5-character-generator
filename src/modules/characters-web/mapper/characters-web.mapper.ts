import { CharacterResponseClass } from '../class/character-response.class';
import { CharacterEntity } from '../../../domain/entities/character.entity';

export class CharactersWebMapper {
  static mapCharacterToResponse(
    character: CharacterEntity,
  ): CharacterResponseClass {
    const response = new CharacterResponseClass();
    response.id = character.id;
    response.age = character.age;
    response.class_type = character.charClass;
    response.name = character.name;
    return response;
  }
}
