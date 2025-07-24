import type { FC, ReactNode } from "react";
import type { Vehicles } from "../../domains";

interface TableVehiclesInput {
  list: Vehicles;
  children: ReactNode;
}

export type TableVehiclesProps = FC<TableVehiclesInput>;
