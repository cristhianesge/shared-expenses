export class ParticipantResponseDto {
  id!: string;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;

  static fromEntity(entity: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }): ParticipantResponseDto {
    const dto = new ParticipantResponseDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}
