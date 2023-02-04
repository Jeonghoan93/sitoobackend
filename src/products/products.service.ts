import { Injectable } from '@nestjs/common';
import { Product, Variant } from './product.model';

import * as fs from 'fs';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  getProducts() {
    return JSON.parse(
      fs.readFileSync(`${__dirname}/../../data/Product.json`, 'utf-8'),
    );
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

  private variants: Variant[] = [];

  insertVariant(
    id: number,
    product_id: number,
    title: string,
    price: number,
    sku: string,
    position: string,
    option1: string,
    option2: string,
    created_at: string,
    updated_at: string,
    taxable: boolean,
    weight: number,
    weight_unit: string,
    presentment_prices: any,
    requires_shipping: boolean,
  ) {
    const newVariant = new Variant(
      id,
      product_id,
      title,
      price,
      sku,
      position,
      option1,
      option2,
      created_at,
      updated_at,
      taxable,
      weight,
      weight_unit,
      presentment_prices,
      requires_shipping,
    );
    this.variants.push(newVariant);
    return id;
  }
}
