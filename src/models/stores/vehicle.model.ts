import type { FormEvent } from "react";
import type { VehicleType } from "../domains";
import type { HandleEventVoid, HandleVoid } from "../utils";

export interface VehicleStore {
  isCard: boolean;
  brand: string;
  pattern: string;
  type: VehicleType;
  handelIsCard: HandleVoid;
  handleType: (
    type: VehicleType,
  ) => (type: FormEvent<HTMLLabelElement>) => void;
  handleBrand: HandleEventVoid;
  handlePattern: HandleEventVoid;
}
