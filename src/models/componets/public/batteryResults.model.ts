import type { FC } from "react";
import type { Products } from "../../domains";

interface BatteryResultsInput {
  batteries: Products;
}

export type BatteryResultsProps = FC<BatteryResultsInput>;
