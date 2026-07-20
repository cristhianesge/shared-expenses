import { Body, Controller, HttpCode, HttpStatus, Delete,  Get,  Param,  Patch,  Post,  } from '@nestjs/common';
import { CreateParticipantRequestDto } from './dto/requests/create-participant.request.dto';
import { UpdateParticipantRequestDto } from './dto/requests/update-participant.request.dto';
import { ParticipantResponseDto } from './dto/response/participant.response.dto';
import { CreateParticipantUseCase } from '../application/create/create-participant.use-case';
import { DeleteParticipantUseCase } from '../application/delete/delete-participant.use-case';
import { GetAllParticipantsUseCase } from '../application/get-all/get-all-participants.use-case';
import { GetParticipantUseCase } from '../application/get/get-participant.use-case';
import { UpdateParticipantUseCase } from '../application/update/update-participant.use-case';

@Controller('participants')
export class ParticipantController {
  constructor(
    private readonly createParticipantUseCase: CreateParticipantUseCase,
    private readonly getAllParticipantsUseCase: GetAllParticipantsUseCase,
    private readonly getParticipantUseCase: GetParticipantUseCase,
    private readonly updateParticipantUseCase: UpdateParticipantUseCase,
    private readonly deleteParticipantUseCase: DeleteParticipantUseCase,
  ) {}

  @Get()
  async findAll(): Promise<ParticipantResponseDto[]> {
    const participants = await this.getAllParticipantsUseCase.execute();
    return participants.map(ParticipantResponseDto.fromEntity);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ParticipantResponseDto> {
    const participant = await this.getParticipantUseCase.execute(id);
    return ParticipantResponseDto.fromEntity(participant);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() dto: CreateParticipantRequestDto,
  ): Promise<ParticipantResponseDto> {
    const participant = await this.createParticipantUseCase.execute(dto.name);
    return ParticipantResponseDto.fromEntity(participant);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateParticipantRequestDto,
  ): Promise<ParticipantResponseDto> {
    const participant = await this.updateParticipantUseCase.execute(
      id,
      dto.name,
    );
    return ParticipantResponseDto.fromEntity(participant);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string): Promise<void> {
    await this.deleteParticipantUseCase.execute(id);
  }
}
