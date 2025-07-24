import type { Response } from "./response.model";

export interface Imgs {
  name: string;
  id: number;
  created_at: string;
  updated_at: string;
}

export interface With {
  id: number;
  description: string;
  reference: string;
}

export interface WithAndWitOut {
  withImage: With[];
  withOutImage: With[];
}

interface ResponseImageProducts {
  images: WithAndWitOut;
  isLoading: boolean;
  isError: boolean;
}

interface ResponseImgs {
  images: Imgs[];
  isLoading: boolean;
  isError: boolean;
}

export type UseImageProducts = () => ResponseImageProducts;
export type UseImages = () => ResponseImgs;

export type ImageProducts = Response<WithAndWitOut>;
export type Images = Response<Imgs[]>;
