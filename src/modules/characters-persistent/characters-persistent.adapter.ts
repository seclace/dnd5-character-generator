import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoadCharacterPort } from '../../domain/ports/out/load-character.port';
import { UpdateCharacterPort } from '../../domain/ports/out/update-character.port';
import { CreateCharacterPort } from '../../domain/ports/out/create-character.port';
import {
  CharacterEntity,
  CharacterId,
} from '../../domain/entities/character.entity';
import { CharacterOrmEntity } from './entity/character.orm-entity';
import { CharactersPersistentMapper } from './mapper/characters-persistent.mapper';
import { CharacterNotFoundException } from './exception/character-not-found.exception';

@Injectable()
export class CharactersPersistentAdapter
  implements LoadCharacterPort, UpdateCharacterPort, CreateCharacterPort {
  constructor(
    @InjectRepository(CharacterOrmEntity)
    private readonly _characterRepository: Repository<CharacterOrmEntity>,
  ) {}

  async createCharacter(character: CharacterEntity): Promise<CharacterEntity> {
    const params = CharactersPersistentMapper.toOrmEntity(character);
    const ormCharacter = await this._characterRepository.save(params);
    return CharactersPersistentMapper.toCoreEntity(ormCharacter);
  }

  async updateCharacter(
    id: CharacterId,
    character: CharacterEntity,
  ): Promise<CharacterEntity> {
    const foundChar = await this._characterRepository.findOne(id);
    if (!foundChar) {
      throw new CharacterNotFoundException();
    }
    const params = {
      name: character.name,
      class_type: character.charClass,
    };
    await this._characterRepository.update({ id }, params);
    const char = await this._characterRepository.findOne({ id });
    return CharactersPersistentMapper.toCoreEntity(char);
  }

  async loadCharacter(id: CharacterId): Promise<CharacterEntity> {
    const character = await this._characterRepository.findOne({ id });
    if (!character) {
      throw new CharacterNotFoundException();
    }
    return CharactersPersistentMapper.toCoreEntity(character);
  }
}
