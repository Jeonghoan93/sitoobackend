import { Injectable } from '@nestjs/common';
import { Product } from './models/product.model';

import * as fs from 'fs';

@Injectable()
export class ProductsService {
  constructor() {
    this.products = JSON.parse(
      fs.readFileSync(`${__dirname}/../../data/Product.json`, 'utf-8'),
    );
  }

  private products: Product[] = [];

  getProducts() {
    return this.products;
  }

  insertProduct(
    id: number,
    title: string,
    vendor: string,
    product_type: string,
    created_at: string,
    updated_at: string,
    published_at: string,
    variant: any,
    tags: string[],
    price: number,
    imageUrl: string,
    body_html: string,
  ) {
    const newProduct = new Product(
      id,
      title,
      vendor,
      product_type,
      created_at,
      updated_at,
      published_at,
      variant,
      tags,
      price,
      imageUrl,
      body_html,
    );
    this.products.push(newProduct);
    return id;
  }
}
