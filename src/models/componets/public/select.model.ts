import type { FC } from "react";
import type { VehicleType } from "../../domains";

interface SelectInput {
  type: VehicleType;
  list: string[];
}

export type SelectProps = FC<SelectInput>;
