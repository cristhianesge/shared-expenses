import { ParticipantEntity } from '../domain/entities/participant.entity';

type ParticipantFactoryInput = {
  id?: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

/** Factory de entidades para tests (unitarios o e2e). */
export function createParticipantEntity(
  input: ParticipantFactoryInput = {},
): ParticipantEntity {
  const now = input.createdAt ?? new Date('2026-07-17T12:00:00.000Z');

  return new ParticipantEntity(
    input.id ?? 'participant-1',
    input.name ?? 'Ana',
    now,
    input.updatedAt ?? now,
  );
}
