import { Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';
import { SyncModule } from './sync/sync.module';
import { VariantModule } from './variants/variants.module';

@Module({
  imports: [ProductsModule, VariantModule, SyncModule],
})
export class AppModule {}
