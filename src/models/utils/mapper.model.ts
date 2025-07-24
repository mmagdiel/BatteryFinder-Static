import type { VehicleType } from "../domains";

export type GetVehicleMapper = (type: VehicleType | "") => string;
