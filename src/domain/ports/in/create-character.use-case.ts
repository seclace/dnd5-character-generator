import { CharacterEntity } from '../../entities/character.entity';
import { CreateCharacterCommand } from './create-character.command';

export const CreateCharacterUseCaseSymbol = Symbol('CreateCharacterUseCase');

export interface CreateCharacterUseCase {
  createCharacter(command: CreateCharacterCommand): Promise<CharacterEntity>;
}
