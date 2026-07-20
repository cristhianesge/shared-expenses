import { Inject, Injectable } from '@nestjs/common';
import { ParticipantEntity } from '../../domain/entities/participant.entity';
import { ParticipantRepository } from '../../domain/repositories/participant.repository';

@Injectable()
export class GetAllParticipantsUseCase {
  constructor(
    @Inject('ParticipantRepository')
    private readonly participantRepository: ParticipantRepository,
  ) {}

  async execute(): Promise<ParticipantEntity[]> {
    return this.participantRepository.findAll();
  }
}
