import type { GetVehicleMapper } from "../models";

import { VehicleTypes, vehicleTypeMapper } from "../models";

const getVehicleMapper: GetVehicleMapper = (type) => {
  if (type !== "" && VehicleTypes.includes(type))
    return vehicleTypeMapper[type];
  return "ligeros";
};

export { getVehicleMapper };
