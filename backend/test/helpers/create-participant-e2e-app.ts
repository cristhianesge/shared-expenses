import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { DomainExceptionFilter } from '../../src/common/filters/domain-exception.filter';
import { ParticipantModule } from '../../src/modules/participant/participant.module';

/** Arranca la app Nest con el mismo stack HTTP que producción (prefijo, pipes, filtro). */
export async function createParticipantE2eApp(
  repository: unknown,
): Promise<INestApplication> {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [ParticipantModule],
  })
    .overrideProvider('ParticipantRepository')
    .useValue(repository)
    .compile();

  const app = moduleFixture.createNestApplication();
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new DomainExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.init();
  return app;
}
