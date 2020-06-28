import { CharacterEntity } from '../../entities/character.entity';
import { UpdateCharacterCommand } from './update-character.command';

export const UpdateCharacterUseCaseSymbol = Symbol('UpdateCharacterUseCase');

export interface UpdateCharacterUseCase {
  updateCharacter(command: UpdateCharacterCommand): Promise<CharacterEntity>;
}
