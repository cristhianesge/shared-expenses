import { ParticipantNotFoundException } from '../../domain/errors/participant-not-found.exception';
import { createMockParticipantRepository } from '../../testing/create-mock-participant-repository';
import { createParticipantEntity } from '../../testing/create-participant-entity';
import { GetParticipantUseCase } from './get-participant.use-case';

describe('GetParticipantUseCase', () => {
  const repository = createMockParticipantRepository();
  const useCase = new GetParticipantUseCase(repository);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('devuelve el participante cuando existe', async () => {
      // Given
      const participant = createParticipantEntity({ id: '1', name: 'Ana' });
      repository.findById.mockResolvedValue(participant);

      // When
      const result = await useCase.execute('1');

      // Then
      expect(result).toEqual(participant);
    });

    it('lanza ParticipantNotFoundException si no existe', async () => {
      // Given
      repository.findById.mockResolvedValue(null);

      // When / Then
      await expect(useCase.execute('missing-id')).rejects.toBeInstanceOf(
        ParticipantNotFoundException,
      );
    });
  });
});
