import { Inject, Injectable } from '@nestjs/common';
import { ParticipantHasAssociationsException } from '../../domain/errors/participant-has-associations.exception';
import { ParticipantNotFoundException } from '../../domain/errors/participant-not-found.exception';
import { ParticipantRepository } from '../../domain/repositories/participant.repository';

@Injectable()
export class DeleteParticipantUseCase {
  constructor(
    @Inject('ParticipantRepository')
    private readonly participantRepository: ParticipantRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const participant = await this.participantRepository.findById(id);

    if (!participant) {
      throw new ParticipantNotFoundException(id);
    }

    const hasAssociations =
      await this.participantRepository.hasAssociations(id);

    if (hasAssociations) {
      throw new ParticipantHasAssociationsException(id);
    }

    await this.participantRepository.delete(id);
  }
}
