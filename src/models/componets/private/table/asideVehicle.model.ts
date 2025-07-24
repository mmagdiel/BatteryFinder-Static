import type { FC } from "react";
import type { Vehicle } from "../../../domains";
import type { HandleVoid } from "../../../utils";

interface AsideVehicleInput {
  vehicle: Vehicle | null;
  handleClose: HandleVoid;
}

export type AsideVehicleProps = FC<AsideVehicleInput>;
