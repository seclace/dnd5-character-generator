import {
  Body,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateCharacterBodyDto } from './dto/create-character-body.dto';
import {
  CreateCharacterUseCase,
  CreateCharacterUseCaseSymbol,
} from '../../domain/ports/in/create-character.use-case';
import { CreateCharacterCommand } from '../../domain/ports/in/create-character.command';
import { CharacterResponseTransformInterceptor } from './interceptor/character-response-transform.interceptor';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CharacterResponseClass } from './class/character-response.class';
import { CharacterEntity } from '../../domain/entities/character.entity';

@Controller('characters')
@ApiTags('characters')
export class CreateCharacterController {
  constructor(
    @Inject(CreateCharacterUseCaseSymbol)
    private readonly _createCharacterUseCase: CreateCharacterUseCase,
  ) {}

  @Post()
  @UseInterceptors(new CharacterResponseTransformInterceptor())
  @ApiOkResponse({ type: CharacterResponseClass })
  @ApiBody({ type: CreateCharacterBodyDto })
  async createCharacter(
    @Body() body: CreateCharacterBodyDto,
  ): Promise<CharacterEntity> {
    const command = new CreateCharacterCommand(
      body.name,
      body.age,
      body.class_type,
    );
    return await this._createCharacterUseCase.createCharacter(command);
  }
}
