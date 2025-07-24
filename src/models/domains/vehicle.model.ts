export type Reference = string | null;

export interface Pattern {
  agm: string;
  efb: string;
  efb2: string;
  gold: string;
  gold2: string;
  pattern: string;
  red: string;
  red2: string;
  velko: string;
  velko2: string;
}

export type Brands = string[];
export type Patterns = Pattern[];

export const VehicleTypes = ["heavy", "light"] as const;
export type VehicleType = (typeof VehicleTypes)[number];

export const vehicleTypeMapper: Record<VehicleType, string> = {
  heavy: "pesados",
  light: "ligeros",
};

export interface Vehicle extends Pattern {
  id: number;
  brand: string;
  nb: string;
  cube: string;
  batteryNumber: string;
  confirmation: string;
  type: VehicleType;
  created_at: string;
  updated_at: string;
}

export type Vehicles = Vehicle[];
