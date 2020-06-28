import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ECharacterClass } from '../../../domain/constants/character-class.constant';
import { CharactersTable } from '../characters-persistent.constant';

@Entity({ name: CharactersTable })
export class CharacterOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  class_type: ECharacterClass;
}
