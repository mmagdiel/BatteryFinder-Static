import type { FC } from "react";
import type { Product } from "../../domains";

interface BatteryCardInput {
  battery: Product;
}

export type BatteryCardProps = FC<BatteryCardInput>;
