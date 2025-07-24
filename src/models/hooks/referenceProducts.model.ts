import type { Products } from "../domains";
import type { Response } from "./response.model";

interface ResponsePatternVehicles {
  batteries: Products;
  isLoading: boolean;
  isError: boolean;
}

export type UseReferenceProducts = (paths: string) => ResponsePatternVehicles;

export type ReferenceProducts = Response<Products>;
