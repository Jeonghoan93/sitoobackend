import { Controller, Post, Body, Get } from '@nestjs/common';
import { VariantService } from './variants.service';

@Controller('variant')
export class VariantController {
  constructor(private readonly variantService: VariantService) {}

  @Post()
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
    const generatedId = this.variantService.insertVariant(
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
  getAllVariants() {
    return this.variantService.getVariants();
  }
}
