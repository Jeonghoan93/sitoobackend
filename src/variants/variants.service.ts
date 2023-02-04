import { Injectable } from '@nestjs/common';
import { Variant } from './models/variant.model';

import * as fs from 'fs';

@Injectable()
export class VariantService {
  constructor() {
    this.variants = JSON.parse(
      fs.readFileSync(`${__dirname}/../../data/Product.json`, 'utf-8'),
    );
  }

  private variants: Variant[] = [];

  getVariants() {
    return this.variants;
  }

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
