import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import environment from './config/environment';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './modules/health/health.module';
import { ParticipantModule } from './modules/participant/participant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [environment],
    }),
    PrismaModule,
    HealthModule,
    ParticipantModule,
  ],
})
export class AppModule {}