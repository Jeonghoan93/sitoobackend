export class Variant {
  constructor(
    public id: number,
    public product_id: number,
    public title: string,
    public price: number,
    public sku: string,
    public position: string,
    public option1?: string,
    public option2?: string,
    public created_at?: string,
    public updated_at?: string,
    public taxable?: boolean,
    public weight?: number,
    public weight_unit?: string,
    public presentment_prices?: {
      amount: number;
      currency_code: string;
    },
    public requires_shipping?: boolean,
  ) {}
}
