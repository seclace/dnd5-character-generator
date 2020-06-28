import { anything, instance, mock, resetCalls, when } from 'ts-mockito';
import { ECharacterClass } from '../../constants/character-class.constant';
import { CreateCharacterPort } from '../../ports/out/create-character.port';
import { CreateCharacterCommand } from '../../ports/in/create-character.command';
import { CreateCharacterService } from '../create-character.service';
import { CharacterEntity } from '../../entities/character.entity';

describe('CreateCharacterService', () => {
  const createCharacterPort = mock<CreateCharacterPort>();

  afterEach(() => {
    resetCalls(createCharacterPort);
  });

  it('creates a character', async () => {
    const name = 'Bibo Name';
    const age = 20;
    const classType = ECharacterClass.Monk;

    const charStub = new CharacterEntity(name, age, classType);
    when(createCharacterPort.createCharacter(anything())).thenResolve(charStub);

    const command = new CreateCharacterCommand(name, age, classType);
    const createCharacterService = new CreateCharacterService(
      instance(createCharacterPort),
    );
    const character = await createCharacterService.createCharacter(command);

    expect(character.name).toEqual(name);
    expect(character.age).toEqual(age);
    expect(character.charClass).toEqual(ECharacterClass.Monk);
  });
});
