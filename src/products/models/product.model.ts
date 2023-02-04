import { Variant } from '../../variants/models/variant.model';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public vendor: string,
    public product_type?: string,
    public created_at?: string,
    public updated_at?: string,
    public published_at?: string,
    public variant?: Variant[],
    public tags: string[] = [],
    public price?: number,
    public imageUrl?: string,
    public body_html?: string,
  ) {}
}
