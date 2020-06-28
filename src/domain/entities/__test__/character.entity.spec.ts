import { CharacterEntity } from '../character.entity';
import { ECharacterClass } from '../../constants/character-class.constant';

describe('CharacterEntity', () => {
  const characterName = 'Bibo Vaknagen';
  const characterAge = 27;
  const characterClass = ECharacterClass.Cleric;
  let character: CharacterEntity;

  beforeEach(() => {
    character = new CharacterEntity(
      characterName,
      characterAge,
      characterClass,
    );
  });

  it('creates character entity', () => {
    expect(character.name).toEqual(characterName);
    expect(character.age).toEqual(27);
    expect(character.charClass).toEqual(characterClass);
  });

  it('sets character name', () => {
    expect(character.name).toEqual(characterName);
    expect(character.age).toEqual(27);
    expect(character.charClass).toEqual(characterClass);
    character.name = 'NeBibo';
    expect(character.name).toEqual('NeBibo');
  });

  it('sets character age', () => {
    expect(character.name).toEqual(characterName);
    expect(character.age).toEqual(27);
    expect(character.charClass).toEqual(characterClass);
    character.age = 45;
    expect(character.age).toEqual(45);
  });

  it('sets character class', () => {
    expect(character.name).toEqual(characterName);
    expect(character.age).toEqual(27);
    expect(character.charClass).toEqual(characterClass);
    character.charClass = ECharacterClass.Bard;
    expect(character.charClass).toEqual(ECharacterClass.Bard);
  });
});
