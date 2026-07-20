import { Module } from '@nestjs/common';
import { ParticipantController } from './api/participant.controller';
import { CreateParticipantUseCase } from './application/create/create-participant.use-case';
import { DeleteParticipantUseCase } from './application/delete/delete-participant.use-case';
import { GetAllParticipantsUseCase } from './application/get-all/get-all-participants.use-case';
import { GetParticipantUseCase } from './application/get/get-participant.use-case';
import { UpdateParticipantUseCase } from './application/update/update-participant.use-case';
import { PrismaParticipantRepository } from './infrastructure/prisma/prisma-participant.repository';

@Module({
  controllers: [ParticipantController],
  providers: [
    {
      provide: 'ParticipantRepository',
      useClass: PrismaParticipantRepository,
    },
    CreateParticipantUseCase,
    GetAllParticipantsUseCase,
    GetParticipantUseCase,
    UpdateParticipantUseCase,
    DeleteParticipantUseCase,
  ],
})
export class ParticipantModule {}
