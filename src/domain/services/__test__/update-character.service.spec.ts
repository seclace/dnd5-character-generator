import {
  anyNumber,
  anyString,
  instance,
  mock,
  resetCalls,
  when,
} from 'ts-mockito';
import { LoadCharacterPort } from '../../ports/out/load-character.port';
import { UpdateCharacterPort } from '../../ports/out/update-character.port';
import {
  CharacterAge,
  CharacterEntity,
  CharacterId,
  CharacterName,
} from '../../entities/character.entity';
import { ECharacterClass } from '../../constants/character-class.constant';
import { UpdateCharacterService } from '../update-character.service';
import { UpdateCharacterCommand } from '../../ports/in/update-character.command';

describe('UpdateCharacterService', () => {
  const loadCharacterPort = mock<LoadCharacterPort>();
  const updateCharacterStatePort = mock<UpdateCharacterPort>();

  function givenACharacter(
    id: CharacterId,
    name: CharacterName,
    age: CharacterAge,
    classType: ECharacterClass,
  ) {
    const character = new CharacterEntity(name, age, classType, id);
    when(loadCharacterPort.loadCharacter(id)).thenResolve(character);
    when(updateCharacterStatePort.updateCharacter(id, character)).thenResolve(
      character,
    );
    return character;
  }

  afterEach(() => {
    resetCalls(loadCharacterPort);
    resetCalls(updateCharacterStatePort);
  });

  it(`changes character's name`, async () => {
    const character = givenACharacter(
      2,
      'Triumph',
      anyNumber(),
      ECharacterClass.Barbarian,
    );

    expect(character.name).toEqual('Triumph');

    const command = new UpdateCharacterCommand(2, 'Bibik');
    const updateCharacterService = new UpdateCharacterService(
      instance(loadCharacterPort),
      instance(updateCharacterStatePort),
    );
    const characterWithNewName = await updateCharacterService.updateCharacter(
      command,
    );

    expect(characterWithNewName.name).toEqual('Bibik');
  });

  it(`changes character's age`, async () => {
    const character = givenACharacter(
      2,
      anyString(),
      30,
      ECharacterClass.Barbarian,
    );

    expect(character.age).toEqual(30);

    const command = new UpdateCharacterCommand(2, anyString(), 102);
    const updateCharacterService = new UpdateCharacterService(
      instance(loadCharacterPort),
      instance(updateCharacterStatePort),
    );
    const characterWithNewName = await updateCharacterService.updateCharacter(
      command,
    );

    expect(characterWithNewName.age).toEqual(102);
  });

  it(`changes character's class`, async () => {
    const character = givenACharacter(
      1,
      anyString(),
      anyNumber(),
      ECharacterClass.Barbarian,
    );

    expect(character.charClass).toEqual(ECharacterClass.Barbarian);

    const command = new UpdateCharacterCommand(
      1,
      'Bibik',
      99,
      ECharacterClass.Cleric,
    );
    const updateCharacterService = new UpdateCharacterService(
      instance(loadCharacterPort),
      instance(updateCharacterStatePort),
    );
    const characterWithNewClass = await updateCharacterService.updateCharacter(
      command,
    );

    expect(characterWithNewClass.charClass).toEqual(ECharacterClass.Cleric);
  });
});
