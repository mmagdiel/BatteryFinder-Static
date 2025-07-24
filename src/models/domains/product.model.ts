import type { Reference } from "./vehicle.model";

export interface Product {
  id: number;
  cube: string;
  type: string;
  description: string;
  reference: Reference;
  image: string;
  long: string;
  width: string;
  high: string;
  ah: string;
  cca: string;
  warranty: string;
  created_at: string;
  updated_at: string;
}

export type Products = Product[];
