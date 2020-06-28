import { CharacterOrmEntity } from '../entity/character.orm-entity';
import { CharacterEntity } from '../../../domain/entities/character.entity';

export class CharactersPersistentMapper {
  static toCoreEntity(ch: CharacterOrmEntity): CharacterEntity {
    return new CharacterEntity(ch.name, ch.age, ch.class_type, ch.id);
  }

  static toOrmEntity(ch: CharacterEntity): CharacterOrmEntity {
    const ormEntity = new CharacterOrmEntity();
    ormEntity.id = ch.id;
    ormEntity.name = ch.name;
    ormEntity.age = ch.age;
    ormEntity.class_type = ch.charClass;
    return ormEntity;
  }
}
