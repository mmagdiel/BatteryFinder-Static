import { create } from "zustand";
import type { VehicleStore } from "../models";

const heavy = "heavy";
const isCard = false;
const brand = "";
const pattern = "";
export const useVehicleStore = create<VehicleStore>()((set) => ({
  brand,
  isCard,
  pattern,
  type: heavy,
  handleType: (type) => () => {
    set({ brand, pattern, isCard, type });
  },
  handleBrand: (e) => set({ brand: e.currentTarget.value, pattern, isCard }),
  handlePattern: (e) => set({ pattern: e.currentTarget.value, isCard }),
  handelIsCard: () => set({ isCard: true }),
}));
