import type { VehicleType, Brands } from "../domains";
import type { Response } from "./response.model";

interface ResponseBrandVehicles {
  brands: Brands;
  isLoading: boolean;
  isError: boolean;
}

export type UseBrandVehicles = (type: VehicleType) => ResponseBrandVehicles;

export type BrandVehicles = Response<Brands>;
