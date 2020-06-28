import {
  Controller,
  Get,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { CharacterResponseTransformInterceptor } from './interceptor/character-response-transform.interceptor';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CharacterResponseClass } from './class/character-response.class';
import { GetCharacterQuery } from '../../domain/ports/in/get-character.query';
import {
  GetCharacterUseCase,
  GetCharacterUseCaseSymbol,
} from '../../domain/ports/in/get-character.use-case';
import { CharacterEntity } from '../../domain/entities/character.entity';

@Controller('characters')
@ApiTags('characters')
export class GetCharacterController {
  constructor(
    @Inject(GetCharacterUseCaseSymbol)
    private readonly _getCharacterUseCase: GetCharacterUseCase,
  ) {}

  @Get(':char_id')
  @UseInterceptors(new CharacterResponseTransformInterceptor())
  @ApiParam({ name: 'char_id', type: Number })
  @ApiOkResponse({ type: CharacterResponseClass })
  async updateCharacter(
    @Param('char_id') char_id: number,
  ): Promise<CharacterEntity> {
    const command = new GetCharacterQuery(char_id);
    return await this._getCharacterUseCase.getCharacter(command);
  }
}
