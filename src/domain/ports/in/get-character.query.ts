import { CharacterId } from '../../entities/character.entity';

export class GetCharacterQuery {
  constructor(private readonly _id: CharacterId) {}

  get id(): CharacterId {
    return this._id;
  }
}
