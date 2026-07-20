import { ParticipantHasAssociationsException } from '../../domain/errors/participant-has-associations.exception';
import { ParticipantNotFoundException } from '../../domain/errors/participant-not-found.exception';
import { createMockParticipantRepository } from '../../testing/create-mock-participant-repository';
import { createParticipantEntity } from '../../testing/create-participant-entity';
import { DeleteParticipantUseCase } from './delete-participant.use-case';

describe('DeleteParticipantUseCase', () => {
  const repository = createMockParticipantRepository();
  const useCase = new DeleteParticipantUseCase(repository);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('elimina cuando existe y no tiene asociaciones', async () => {
      // Given
      repository.findById.mockResolvedValue(
        createParticipantEntity({ id: '1', name: 'Ana' }),
      );
      repository.hasAssociations.mockResolvedValue(false);

      // When
      await useCase.execute('1');

      // Then
      expect(repository.delete).toHaveBeenCalledWith('1');
    });

    it('lanza ParticipantNotFoundException si no existe', async () => {
      // Given
      repository.findById.mockResolvedValue(null);

      // When / Then
      await expect(useCase.execute('missing-id')).rejects.toBeInstanceOf(
        ParticipantNotFoundException,
      );
    });

    it('lanza ParticipantHasAssociationsException si tiene asociaciones', async () => {
      // Given
      repository.findById.mockResolvedValue(
        createParticipantEntity({ id: '1', name: 'Ana' }),
      );
      repository.hasAssociations.mockResolvedValue(true);

      // When / Then
      await expect(useCase.execute('1')).rejects.toBeInstanceOf(
        ParticipantHasAssociationsException,
      );
      expect(repository.delete).not.toHaveBeenCalled();
    });
  });
});
