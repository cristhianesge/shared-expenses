import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DomainExceptionFilter } from './common/filters/domain-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefijo global para la API
  app.setGlobalPrefix('api');

  app.useGlobalFilters(new DomainExceptionFilter());

  // Validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // CORS
  app.enableCors({
    origin: true,
    credentials: true,
  });

  const config = app.get(ConfigService);
  const port = config.get<number>('port', 3000);
  // await app.listen(process.env.PORT ?? 3000);
  await app.listen(port);
  console.log(`API disponible en http://localhost:${port}/api`);  
}

bootstrap();
