import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SyncService } from './sync/sync.service';
import { ProductsService } from './products/products.service';

async function bootstrap() {
  const syncService = new SyncService(new ProductsService());
  syncService.startSync();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
