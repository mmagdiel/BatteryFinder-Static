import type { Product } from "./product.model";

export interface MostProduct {
  el: Product;
  count: number;
}

export interface MostType {
  type: string;
  frequency: number;
}

export interface MostBrand {
  brand: string;
  frequency: number;
}

export interface Dashboard {
  count_products: number;
  count_vehicles: number;
  recent_products: Product[];
  most_searched_type: MostType;
  most_searched_brand: MostBrand;
  most_searched_products: MostProduct[];
}
