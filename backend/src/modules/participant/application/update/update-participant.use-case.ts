import { Inject, Injectable } from '@nestjs/common';
import { ParticipantEntity } from '../../domain/entities/participant.entity';
import { ParticipantNotFoundException } from '../../domain/errors/participant-not-found.exception';
import { ParticipantRepository } from '../../domain/repositories/participant.repository';

@Injectable()
export class UpdateParticipantUseCase {
  constructor(
    @Inject('ParticipantRepository')
    private readonly participantRepository: ParticipantRepository,
  ) {}

  async execute(id: string, name: string): Promise<ParticipantEntity> {
    const existing = await this.participantRepository.findById(id);

    if (!existing) {
      throw new ParticipantNotFoundException(id);
    }

    const participant = new ParticipantEntity(
      existing.id,
      name,
      existing.createdAt,
      existing.updatedAt,
    );

    return this.participantRepository.update(participant);
  }
}
