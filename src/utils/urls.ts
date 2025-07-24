import { API_URL } from "astro:env/client";
import type { UrlBatteryBy, UrlBy, UrlVehiclesBy } from "../models";
import type { UrlBrandBy, UrlPatternBy, UrlProductsBy } from "../models";
import type { UrlPathImageBy } from "../models";

export const urlBrandBy: UrlBrandBy = (type) => `${API_URL}/${type}-vehicles`;

export const urlPatternBy: UrlPatternBy = (type, brand) =>
  `${API_URL}/${type}-vehicles/${brand}`;

export const urlBatteryBy: UrlBatteryBy = (paths) => `${API_URL}/${paths}`;

export const urlLoginBy: UrlBy = () => `${API_URL}/auth/login`;

export const urlProductsBy: UrlProductsBy = (params = 1) =>
  `${API_URL}/products?page=${params}`;

export const urlVehiclesBy: UrlVehiclesBy = (params = 1) =>
  `${API_URL}/vehicles?page=${params}`;

export const urlDashboardBy: UrlBy = () => `${API_URL}/dashboard`;

export const urlImagesBy: UrlBy = () => `${API_URL}/images`;

export const urlImageProductsBy: UrlBy = () => `${API_URL}/image/products`;

export const urlAssetImageBy: UrlPathImageBy = (path) =>
  `${API_URL}/assets/images/${path}`;

export const urlShowImageBy: UrlPathImageBy = (path) => `${API_URL}/${path}`;
