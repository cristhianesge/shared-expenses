import { Inject, Injectable } from '@nestjs/common';
import { ParticipantEntity } from '../../domain/entities/participant.entity';
import { ParticipantNotFoundException } from '../../domain/errors/participant-not-found.exception';
import { ParticipantRepository } from '../../domain/repositories/participant.repository';

@Injectable()
export class GetParticipantUseCase {
  constructor(
    @Inject('ParticipantRepository')
    private readonly participantRepository: ParticipantRepository,
  ) {}

  async execute(id: string): Promise<ParticipantEntity> {
    const participant = await this.participantRepository.findById(id);

    if (!participant) {
      throw new ParticipantNotFoundException(id);
    }

    return participant;
  }
}
