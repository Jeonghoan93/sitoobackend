import * as cron from 'node-cron';
import axios from 'axios';
import { ProductsService } from '../products/products.service';

export class SyncService {
  constructor(private readonly productsService: ProductsService) {}

  async startSync() {
    cron.schedule('* * * * * *', async () => {
      const products = this.productsService.getProducts();

      for (const product of products) {
        try {
          // call the Sitoo API to create/update products
          await axios.post(
            'https://api-sandbox.mysitoo.com/v2/accounts/91615/products',
            product,
            {
              headers: {
                Authorization:
                  'Basic OTE2MTUtMTAwOk9PUnN2VG1DNmJtZ1FXYU9wZmcyVzhsSXIxM2RDeGxQbTczYzU0aTM=',
              },
            },
          );
          console.log(`Product ${product} was created/updated successfully`);
        } catch (error) {
          console.error(
            `Failed to create/update product ${product}: ${error.message}`,
          );
        }
      }
    });
  }
}
