import {
  CharacterAge,
  CharacterId,
  CharacterName,
} from '../../entities/character.entity';
import { ECharacterClass } from '../../constants/character-class.constant';

export class UpdateCharacterCommand {
  constructor(
    private readonly _id: CharacterId,
    private readonly _name?: CharacterName,
    private readonly _age?: CharacterAge,
    private readonly _classType?: ECharacterClass,
  ) {}

  get id(): CharacterId {
    return this._id;
  }

  get name(): CharacterName | undefined {
    return this._name;
  }

  get age(): CharacterAge | undefined {
    return this._age;
  }

  get classType(): ECharacterClass | undefined {
    return this._classType;
  }
}
