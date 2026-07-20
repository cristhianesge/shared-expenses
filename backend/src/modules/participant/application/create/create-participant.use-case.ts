import { Inject, Injectable } from '@nestjs/common';
import { ParticipantEntity } from '../../domain/entities/participant.entity';
import { ParticipantRepository } from '../../domain/repositories/participant.repository';

@Injectable()
export class CreateParticipantUseCase {
  constructor(
    @Inject('ParticipantRepository')
    private readonly participantRepository: ParticipantRepository,
  ) {}

  async execute(name: string): Promise<ParticipantEntity> {
    const participant = new ParticipantEntity('', name, new Date(), new Date());
    return this.participantRepository.create(participant);
  }
}
