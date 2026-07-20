import { ParticipantEntity } from '../entities/participant.entity';

export interface ParticipantRepository {
  findAll(): Promise<ParticipantEntity[]>;
  findById(id: string): Promise<ParticipantEntity | null>;
  create(participant: ParticipantEntity): Promise<ParticipantEntity>;
  update(participant: ParticipantEntity): Promise<ParticipantEntity>;
  delete(id: string): Promise<void>;
  hasAssociations(id: string): Promise<boolean>;
}
