import { CreateCharacterUseCase } from '../ports/in/create-character.use-case';
import { CharacterEntity } from '../entities/character.entity';
import { CreateCharacterCommand } from '../ports/in/create-character.command';
import { CreateCharacterPort } from '../ports/out/create-character.port';

export class CreateCharacterService implements CreateCharacterUseCase {
  constructor(private readonly _createCharacterPort: CreateCharacterPort) {}

  async createCharacter(
    command: CreateCharacterCommand,
  ): Promise<CharacterEntity> {
    const character = new CharacterEntity(
      command.name,
      command.age,
      command.classType,
    );
    return await this._createCharacterPort.createCharacter(character);
  }
}
