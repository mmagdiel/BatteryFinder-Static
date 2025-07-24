import type { FC } from "react";
import type { VehicleType } from "../../domains";

interface BrandInput {
  type: VehicleType;
}

export type BrandProps = FC<BrandInput>;
