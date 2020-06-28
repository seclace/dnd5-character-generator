import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterOrmEntity } from './entity/character.orm-entity';
import { CharactersPersistentAdapter } from './characters-persistent.adapter';
import { CreateCharacterUseCaseSymbol } from '../../domain/ports/in/create-character.use-case';
import { CreateCharacterService } from '../../domain/services/create-character.service';
import { UpdateCharacterUseCaseSymbol } from '../../domain/ports/in/update-character.use-case';
import { UpdateCharacterService } from '../../domain/services/update-character.service';
import { GetCharacterUseCaseSymbol } from '../../domain/ports/in/get-character.use-case';
import { GetCharacterService } from '../../domain/services/get-character.service';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterOrmEntity])],
  providers: [
    CharactersPersistentAdapter,
    {
      provide: CreateCharacterUseCaseSymbol,
      useFactory: (adapter: CharactersPersistentAdapter) => {
        return new CreateCharacterService(adapter);
      },
      inject: [CharactersPersistentAdapter],
    },
    {
      provide: UpdateCharacterUseCaseSymbol,
      useFactory: (adapter: CharactersPersistentAdapter) => {
        return new UpdateCharacterService(adapter, adapter);
      },
      inject: [CharactersPersistentAdapter],
    },
    {
      provide: GetCharacterUseCaseSymbol,
      useFactory: (adapter: CharactersPersistentAdapter) => {
        return new GetCharacterService(adapter);
      },
      inject: [CharactersPersistentAdapter],
    },
  ],
  exports: [
    CreateCharacterUseCaseSymbol,
    UpdateCharacterUseCaseSymbol,
    GetCharacterUseCaseSymbol,
  ],
})
export class CharactersPersistentModule {}
