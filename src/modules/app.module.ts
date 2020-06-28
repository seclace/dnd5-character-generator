import { Module } from '@nestjs/common';
import { CharactersWebModule } from './characters-web/characters-web.module';
import { CharactersPersistentModule } from './characters-persistent/characters-persistent.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'dnd5',
      username: 'dnd5',
      password: 'dnd5',
      autoLoadEntities: true,
    }),
    CharactersWebModule,
    CharactersPersistentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
