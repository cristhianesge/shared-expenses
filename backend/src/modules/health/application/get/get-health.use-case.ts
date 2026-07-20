import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { HealthResponse } from './get-health.response.dto';

@Injectable()
export class GetHealthUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<HealthResponse> {

    await this.prisma.$queryRaw`SELECT 1`;
    console.log('Database connected');
    return {
      status: 'ok',
      database: 'connected',
      timestamp: new Date(),  
    };
  }
}