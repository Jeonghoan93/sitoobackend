import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  addProduct(
    @Body('id') id: number,
    @Body('title') title: string,
    @Body('vendor') vendor: string,
    @Body('product_type') product_type: string,
    @Body('created_at') created_at: string,
    @Body('updated_at') updated_at: string,
    @Body('published_at') published_at: string,
    @Body('variant') variant: object,
    @Body('tags') tags: string[] = [],
    @Body('price') price: number,
    @Body('imageUrl') imageUrl: string,
    @Body('body_html') body_html: string,
  ) {
    const generatedId = this.productService.insertProduct(
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
    return { id: generatedId };
  }

  @Post('/variant')
  addVariant(
    @Body('id') id: number,
    @Body('product_id') product_id: number,
    @Body('title') title: string,
    @Body('price') price: number,
    @Body('sku') sku: string,
    @Body('position') position: string,
    @Body('option1') option1: string,
    @Body('option2') option2: string,
    @Body('created_at') created_at: string,
    @Body('updated_at') updated_at: string,
    @Body('taxable') taxable: boolean,
    @Body('weight') weight: number,
    @Body('weight_unit') weight_unit: string,
    @Body('presentment_prices')
    presentment_prices: { price: { amount: number; currency_code: string } },
    @Body('requires_shipping') requires_shipping = true,
  ) {
    const generatedId = this.productService.insertVariant(
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
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }
}
