import { Controller, Get } from '@nestjs/common';
import { GetHealthUseCase } from '../application/get/get-health.use-case';

@Controller('health')
export class HealthController {
  constructor(private readonly getHealthUseCase: GetHealthUseCase) {}

  @Get()
  async getHealth() {
    return this.getHealthUseCase.execute();
  }
}       