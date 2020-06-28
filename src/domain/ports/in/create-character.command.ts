import { CharacterAge, CharacterName } from '../../entities/character.entity';
import { ECharacterClass } from '../../constants/character-class.constant';

export class CreateCharacterCommand {
  constructor(
    private readonly _name: CharacterName,
    private readonly _age: CharacterAge,
    private readonly _classType: ECharacterClass,
  ) {}

  get name(): CharacterName {
    return this._name;
  }

  get age(): CharacterAge {
    return this._age;
  }

  get classType(): ECharacterClass {
    return this._classType;
  }
}
