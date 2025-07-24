import type { VehicleType } from "../domains";

export type UrlBrandBy = (type: VehicleType) => string;

export type UrlPatternBy = (type: VehicleType, brand: string) => string;

export type UrlBatteryBy = (paths: string) => string;

export type UrlBy = () => string;

export type UrlProductsBy = (params?: number) => string;

export type UrlVehiclesBy = (params?: number) => string;

export type UrlPathImageBy = (path: string) => string;
