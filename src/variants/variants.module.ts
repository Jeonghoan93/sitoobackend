import { Module } from '@nestjs/common';
import { VariantController } from './variants.controller';
import { VariantService } from './variants.service';

@Module({
  controllers: [VariantController],
  providers: [VariantService],
})
export class VariantModule {}
