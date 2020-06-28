import { GetCharacterUseCase } from '../ports/in/get-character.use-case';
import { LoadCharacterPort } from '../ports/out/load-character.port';
import { CharacterEntity } from '../entities/character.entity';
import { GetCharacterQuery } from '../ports/in/get-character.query';

export class GetCharacterService implements GetCharacterUseCase {
  constructor(private readonly _loadCharacterPort: LoadCharacterPort) {}

  async getCharacter(query: GetCharacterQuery): Promise<CharacterEntity> {
    return await this._loadCharacterPort.loadCharacter(query.id);
  }
}
