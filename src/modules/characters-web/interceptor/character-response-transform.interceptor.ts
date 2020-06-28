import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharactersWebMapper } from '../mapper/characters-web.mapper';
import { CharacterEntity } from '../../../domain/entities/character.entity';

@Injectable()
export class CharacterResponseTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map(data =>
          data instanceof CharacterEntity
            ? Array.isArray(data)
              ? data.map(CharactersWebMapper.mapCharacterToResponse)
              : CharactersWebMapper.mapCharacterToResponse(data)
            : data,
        ),
      );
  }
}
