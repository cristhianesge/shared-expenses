import { ParticipantRepository } from '../domain/repositories/participant.repository';

export type MockParticipantRepository = jest.Mocked<ParticipantRepository>;

/** Mock del puerto ParticipantRepository para tests unitarios. */
export function createMockParticipantRepository(): MockParticipantRepository {
  return {
    findAll: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    hasAssociations: jest.fn(),
  };
}
