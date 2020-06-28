import { ECharacterClass } from '../constants/character-class.constant';

export type CharacterId = number;
export type CharacterName = string;
export type CharacterAge = number;

export class CharacterEntity {
  constructor(
    private _name: CharacterName,
    private _age: CharacterAge,
    private _charClass: ECharacterClass,
    private _id?: CharacterId,
  ) {}

  get id(): CharacterId | undefined {
    return this._id;
  }

  get name(): CharacterName {
    return this._name;
  }

  set name(name: CharacterName) {
    this._name = name;
  }

  get age(): CharacterAge {
    return this._age;
  }

  set age(age: CharacterAge) {
    this._age = age;
  }

  get charClass(): ECharacterClass {
    return this._charClass;
  }

  set charClass(value: ECharacterClass) {
    this._charClass = value;
  }
}
