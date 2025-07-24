import type { VehicleType, Patterns, Products, Vehicles } from "../domains";
import type { Response } from "./response.model";

interface ResponsePatternVehicles {
  patterns: Patterns;
  isLoading: boolean;
  isError: boolean;
}

export type UsePatternVehicles = (
  type: VehicleType,
  brand: string,
) => ResponsePatternVehicles;

export type PatternVehicles = Response<Patterns>;

interface IndexResponse<T> {
  data: T;
  current_page: number;
  current_page_url: string | null;
  first_page_url: string | null;
  from: number;
  next_page_url: string | null;
  path: string | null;
  per_page: number;
  prev_page_url: null;
  to: number;
}

interface ResponseIndexProducts {
  products: IndexResponse<Products>;
  isLoading: boolean;
  isError: boolean;
}

export type UseIndexProducts = (params: number) => ResponseIndexProducts;

export type IndexProducts = Response<IndexResponse<Products>>;
//IndexResponse<Products> | never[]
interface ResponseIndexVehicles {
  vehicles: IndexResponse<Vehicles>;
  isLoading: boolean;
  isError: boolean;
}

export type UseIndexVehicles = (params: number) => ResponseIndexVehicles;

export type IndexVehicles = Response<IndexResponse<Vehicles>>;
