import type { FC } from "react";
import type { VehicleType } from "../../domains";

interface PatternInput {
  brand: string;
  type: VehicleType;
}

export type PatternProps = FC<PatternInput>;
