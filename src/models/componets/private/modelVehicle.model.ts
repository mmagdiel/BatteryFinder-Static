import type { FC } from "react";
import type { HandleVoid } from "../../utils";
import type { Vehicles } from "../../domains";

interface ModalVehicleInput {
  handleCancelDelete: HandleVoid;
  handleDelete: HandleVoid;
  isModalOpen: boolean;
  idToDelete: number;
  label: string;
  list: Vehicles;
}

export type ModalVehicleProps = FC<ModalVehicleInput>;
