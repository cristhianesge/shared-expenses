import { ParticipantEntity } from '../../src/modules/participant/domain/entities/participant.entity';
import { ParticipantRepository } from '../../src/modules/participant/domain/repositories/participant.repository';

type InMemoryParticipantRepository = ParticipantRepository & {
  store: Map<string, ParticipantEntity>;
  reset: () => void;
};

/**
 * Repositorio en memoria para E2E.
 * Simula persistencia HTTP↔use case↔repo sin Prisma.
 * No usar en unitarios (allí va el mock con jest.fn).
 */
export function createInMemoryParticipantRepository(
  options: { associatedIds?: string[] } = {},
): InMemoryParticipantRepository {
  const store = new Map<string, ParticipantEntity>();
  const associatedIds = new Set(options.associatedIds ?? ['with-rules']);
  const now = new Date('2026-07-17T12:00:00.000Z');

  return {
    store,
    reset: () => store.clear(),
    findAll: async () => Array.from(store.values()),
    findById: async (id: string) => store.get(id) ?? null,
    create: async (participant: ParticipantEntity) => {
      const created = new ParticipantEntity(
        `id-${store.size + 1}`,
        participant.name,
        now,
        now,
      );
      store.set(created.id, created);
      return created;
    },
    update: async (participant: ParticipantEntity) => {
      const updated = new ParticipantEntity(
        participant.id,
        participant.name,
        now,
        now,
      );
      store.set(updated.id, updated);
      return updated;
    },
    delete: async (id: string) => {
      store.delete(id);
    },
    hasAssociations: async (id: string) => associatedIds.has(id),
  };
}
