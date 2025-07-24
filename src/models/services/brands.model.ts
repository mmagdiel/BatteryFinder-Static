interface Brand {
  id: string;
  brand: string;
}

export type GetBrands = () => Brand[];
