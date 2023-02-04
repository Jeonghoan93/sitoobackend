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

  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }
}
