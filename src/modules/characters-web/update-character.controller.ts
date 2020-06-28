import {
  Body,
  Controller,
  Inject,
  Param,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import {
  UpdateCharacterUseCase,
  UpdateCharacterUseCaseSymbol,
} from '../../domain/ports/in/update-character.use-case';
import { UpdateCharacterCommand } from '../../domain/ports/in/update-character.command';
import { UpdateCharacterBodyDto } from './dto/update-character-body.dto';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CharacterResponseTransformInterceptor } from './interceptor/character-response-transform.interceptor';
import { CharacterResponseClass } from './class/character-response.class';
import { CharacterEntity } from '../../domain/entities/character.entity';

@Controller('characters')
@ApiTags('characters')
export class UpdateCharacterController {
  constructor(
    @Inject(UpdateCharacterUseCaseSymbol)
    private readonly _updateCharacterUseCase: UpdateCharacterUseCase,
  ) {}

  @Put(':char_id')
  @UseInterceptors(new CharacterResponseTransformInterceptor())
  @ApiParam({ name: 'char_id', type: Number })
  @ApiBody({ type: UpdateCharacterBodyDto })
  @ApiOkResponse({ type: CharacterResponseClass })
  async updateCharacter(
    @Param('char_id') char_id: number,
    @Body() body: UpdateCharacterBodyDto,
  ): Promise<CharacterEntity> {
    const command = new UpdateCharacterCommand(
      char_id,
      body.name,
      body.age,
      body.class_type,
    );
    return await this._updateCharacterUseCase.updateCharacter(command);
  }
}
