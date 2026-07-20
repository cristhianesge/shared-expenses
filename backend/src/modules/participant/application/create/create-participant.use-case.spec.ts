import { CreateParticipantUseCase } from './create-participant.use-case';
import { createMockParticipantRepository } from '../../testing/create-mock-participant-repository';
import { createParticipantEntity } from '../../testing/create-participant-entity';

describe('CreateParticipantUseCase', () => {
  const repository = createMockParticipantRepository();
  const useCase = new CreateParticipantUseCase(repository);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('crea participantes aunque el nombre ya exista', async () => {
      // Given
      const first = createParticipantEntity({ id: '1', name: 'Ana' });
      const second = createParticipantEntity({ id: '2', name: 'Ana' });
      repository.create
        .mockResolvedValueOnce(first)
        .mockResolvedValueOnce(second);

      // When
      const result1 = await useCase.execute('Ana');
      const result2 = await useCase.execute('Ana');

      // Then
      expect(result1).toEqual(first);
      expect(result2).toEqual(second);
      expect(repository.create).toHaveBeenCalledTimes(2);
    });
  });
});
