import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { createParticipantEntity } from '../src/modules/participant/testing/create-participant-entity';
import { createInMemoryParticipantRepository } from './helpers/create-in-memory-participant-repository';
import { createParticipantE2eApp } from './helpers/create-participant-e2e-app';

describe('ParticipantsController (e2e)', () => {
  let app: INestApplication<App>;
  const repository = createInMemoryParticipantRepository();

  beforeEach(async () => {
    repository.reset();
    app = (await createParticipantE2eApp(repository)) as INestApplication<App>;
  });

  afterEach(async () => {
    await app.close();
  });

  describe('GET /participants', () => {
    it('devuelve lista vacía cuando no hay participantes', async () => {
      // Given — store vacío

      // When
      const response = await request(app.getHttpServer()).get(
        '/api/participants',
      );

      // Then
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });

    it('devuelve todos los participantes', async () => {
      // Given
      repository.store.set(
        'id-1',
        createParticipantEntity({ id: 'id-1', name: 'Ana' }),
      );
      repository.store.set(
        'id-2',
        createParticipantEntity({ id: 'id-2', name: 'Bob' }),
      );

      // When
      const response = await request(app.getHttpServer()).get(
        '/api/participants',
      );

      // Then
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(2);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 'id-1', name: 'Ana' }),
          expect.objectContaining({ id: 'id-2', name: 'Bob' }),
        ]),
      );
    });
  });

  describe('POST /participants', () => {
    it('crea un participante', async () => {
      // Given
      const payload = { name: 'Ana' };

      // When
      const response = await request(app.getHttpServer())
        .post('/api/participants')
        .send(payload);

      // Then
      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({ id: 'id-1', name: 'Ana' });
    });

    it('permite nombres duplicados', async () => {
      // Given
      const payload = { name: 'Ana' };

      // When
      const first = await request(app.getHttpServer())
        .post('/api/participants')
        .send(payload);
      const second = await request(app.getHttpServer())
        .post('/api/participants')
        .send(payload);

      // Then
      expect(first.status).toBe(201);
      expect(second.status).toBe(201);
    });

    it('rechaza cuando falta el nombre', async () => {
      // Given
      const payload = {};

      // When
      const response = await request(app.getHttpServer())
        .post('/api/participants')
        .send(payload);

      // Then
      expect(response.status).toBe(400);
    });

    it('rechaza nombre en blanco', async () => {
      // Given
      const payload = { name: '   ' };

      // When
      const response = await request(app.getHttpServer())
        .post('/api/participants')
        .send(payload);

      // Then
      expect(response.status).toBe(400);
    });

    it('rechaza propiedades no permitidas', async () => {
      // Given
      const payload = { name: 'Ana', extra: true };

      // When
      const response = await request(app.getHttpServer())
        .post('/api/participants')
        .send(payload);

      // Then
      expect(response.status).toBe(400);
    });
  });

  describe('GET /participants/:id', () => {
    it('devuelve un participante por id', async () => {
      // Given
      repository.store.set(
        'id-1',
        createParticipantEntity({ id: 'id-1', name: 'Ana' }),
      );

      // When
      const response = await request(app.getHttpServer()).get(
        '/api/participants/id-1',
      );

      // Then
      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({ id: 'id-1', name: 'Ana' });
    });

    it('responde 404 si el participante no existe', async () => {
      // Given — id inexistente

      // When
      const response = await request(app.getHttpServer()).get(
        '/api/participants/missing-id',
      );

      // Then
      expect(response.status).toBe(404);
    });
  });

  describe('PATCH /participants/:id', () => {
    it('actualiza un participante', async () => {
      // Given
      repository.store.set(
        'id-1',
        createParticipantEntity({ id: 'id-1', name: 'Ana' }),
      );
      const payload = { name: 'Ana Updated' };

      // When
      const response = await request(app.getHttpServer())
        .patch('/api/participants/id-1')
        .send(payload);

      // Then
      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        id: 'id-1',
        name: 'Ana Updated',
      });
    });

    it('responde 404 si el participante no existe', async () => {
      // Given
      const payload = { name: 'Ana' };

      // When
      const response = await request(app.getHttpServer())
        .patch('/api/participants/missing-id')
        .send(payload);

      // Then
      expect(response.status).toBe(404);
    });

    it('rechaza payload inválido', async () => {
      // Given
      repository.store.set(
        'id-1',
        createParticipantEntity({ id: 'id-1', name: 'Ana' }),
      );
      const payload = { name: '   ' };

      // When
      const response = await request(app.getHttpServer())
        .patch('/api/participants/id-1')
        .send(payload);

      // Then
      expect(response.status).toBe(400);
    });
  });

  describe('DELETE /participants/:id', () => {
    it('elimina un participante sin asociaciones', async () => {
      // Given
      repository.store.set(
        'id-1',
        createParticipantEntity({ id: 'id-1', name: 'Ana' }),
      );

      // When
      const response = await request(app.getHttpServer()).delete(
        '/api/participants/id-1',
      );

      // Then
      expect(response.status).toBe(200);
      expect(repository.store.has('id-1')).toBe(false);
    });

    it('responde 404 si el participante no existe', async () => {
      // Given — id inexistente

      // When
      const response = await request(app.getHttpServer()).delete(
        '/api/participants/missing-id',
      );

      // Then
      expect(response.status).toBe(404);
    });

    it('responde 409 si el participante tiene asociaciones', async () => {
      // Given
      repository.store.set(
        'with-rules',
        createParticipantEntity({ id: 'with-rules', name: 'Bob' }),
      );

      // When
      const response = await request(app.getHttpServer()).delete(
        '/api/participants/with-rules',
      );

      // Then
      expect(response.status).toBe(409);
      expect(repository.store.has('with-rules')).toBe(true);
    });
  });
});
