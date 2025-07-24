import type { FC } from "react";
import type { Vehicles } from "../../../domains";
import type { HandleIDVoid, HandleIDValueVoid } from "../../../utils";

interface BodyVehicleInput {
  vehicles: Vehicles;
  deletedItems: Set<number>;
  handleDelete: HandleIDVoid;
  unsavedChanges: Set<number>;
  handleSyncItem: HandleIDVoid;
  handleEdit: HandleIDValueVoid;
  handleViewVehicle: HandleIDVoid;
}

export type BodyVehicleProps = FC<BodyVehicleInput>;
