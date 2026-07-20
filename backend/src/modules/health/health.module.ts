import { Module } from "@nestjs/common";
import { HealthController } from "./api/health.controller";
import { GetHealthUseCase } from "./application/get/get-health.use-case";

@Module({
  controllers: [HealthController],
  providers: [GetHealthUseCase],
})
export class HealthModule {
    constructor() {
        console.log('HealthModule initialized');
    }
}