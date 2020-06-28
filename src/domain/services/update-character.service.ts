import { UpdateCharacterUseCase } from '../ports/in/update-character.use-case';
import { CharacterEntity } from '../entities/character.entity';
import { LoadCharacterPort } from '../ports/out/load-character.port';
import { UpdateCharacterPort } from '../ports/out/update-character.port';
import { UpdateCharacterCommand } from '../ports/in/update-character.command';

export class UpdateCharacterService implements UpdateCharacterUseCase {
  constructor(
    private readonly _loadCharacterPort: LoadCharacterPort,
    private readonly _updateCharacterPort: UpdateCharacterPort,
  ) {}

  async updateCharacter(
    command: UpdateCharacterCommand,
  ): Promise<CharacterEntity> {
    const foundCharacter = await this._loadCharacterPort.loadCharacter(
      command.id,
    );
    if (!foundCharacter) {
      throw new Error(`character with such id not found: ${command.id}`);
    }
    foundCharacter.name = command.name || foundCharacter.name;
    foundCharacter.age = command.age || foundCharacter.age;
    foundCharacter.charClass = command.classType || foundCharacter.charClass;
    return await this._updateCharacterPort.updateCharacter(
      command.id,
      foundCharacter,
    );
  }
}
