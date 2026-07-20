import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ParticipantEntity } from '../../domain/entities/participant.entity';
import { ParticipantRepository } from '../../domain/repositories/participant.repository';
import { ParticipantMapper } from './mappers/participant.mapper';

@Injectable()
export class PrismaParticipantRepository implements ParticipantRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<ParticipantEntity | null> {
    const participant = await this.prisma.participant.findUnique({
      where: { id },
    });

    if (!participant) {
      return null;
    }

    return ParticipantMapper.toEntity(participant);
  }

  async create(participant: ParticipantEntity): Promise<ParticipantEntity> {
    const created = await this.prisma.participant.create({
      data: { name: participant.name },
    });

    return ParticipantMapper.toEntity(created);
  }

  async update(participant: ParticipantEntity): Promise<ParticipantEntity> {
    const updated = await this.prisma.participant.update({
      where: { id: participant.id },
      data: { name: participant.name },
    });

    return ParticipantMapper.toEntity(updated);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.participant.delete({ where: { id } });
  }

  async findAll(): Promise<ParticipantEntity[]> {
    const participants = await this.prisma.participant.findMany();
    return participants.map((participant) =>
      ParticipantMapper.toEntity(participant),
    );
  }

  async hasAssociations(id: string): Promise<boolean> {
    const count = await this.prisma.contributionRule.count({
      where: { participantId: id },
    });

    return count > 0;
  }
}
