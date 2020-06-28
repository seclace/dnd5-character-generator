import { CharacterEntity } from '../../entities/character.entity';
import { GetCharacterQuery } from './get-character.query';

export const GetCharacterUseCaseSymbol = Symbol('GetCharacterUseCase');

export interface GetCharacterUseCase {
  getCharacter(query: GetCharacterQuery): Promise<CharacterEntity>;
}
