import { instance, mock, resetCalls, when } from 'ts-mockito';
import { ECharacterClass } from '../../constants/character-class.constant';
import { CharacterEntity } from '../../entities/character.entity';
import { LoadCharacterPort } from '../../ports/out/load-character.port';
import { GetCharacterQuery } from '../../ports/in/get-character.query';
import { GetCharacterService } from '../get-character.service';

describe('GetCharacterService', () => {
  const loadCharacterPort = mock<LoadCharacterPort>();

  afterEach(() => {
    resetCalls(loadCharacterPort);
  });

  it('gets a character', async () => {
    const name = 'Bibo Name';
    const age = 20;
    const classType = ECharacterClass.Monk;

    const charStub = new CharacterEntity(name, age, classType, 10);
    when(loadCharacterPort.loadCharacter(10)).thenResolve(charStub);

    const query = new GetCharacterQuery(10);
    const getCharacterService = new GetCharacterService(
      instance(loadCharacterPort),
    );
    const character = await getCharacterService.getCharacter(query);

    expect(character.name).toEqual(name);
    expect(character.age).toEqual(age);
    expect(character.charClass).toEqual(ECharacterClass.Monk);
  });
});
