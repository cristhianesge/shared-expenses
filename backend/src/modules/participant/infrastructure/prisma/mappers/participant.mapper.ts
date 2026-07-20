import { ParticipantEntity } from '../../../domain/entities/participant.entity';

export class ParticipantMapper {
  static toEntity(data: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }): ParticipantEntity {
    return new ParticipantEntity(
      data.id,
      data.name,
      data.createdAt,
      data.updatedAt,
    );
  }

  static toPersistence(entity: ParticipantEntity): { name: string } {
    return {
      name: entity.name,
    };
  }
}
