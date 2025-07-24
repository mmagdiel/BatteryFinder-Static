import useSWR from "swr";
import { query } from "../services";
import { urlImageProductsBy } from "../utils";

import type { UseImageProducts, ImageProducts } from "../models";

const defauftImageProducts = { withImage: [], withOutImage: [] };

const useImageProducts: UseImageProducts = () => {
  const { data, error } = useSWR<ImageProducts>(urlImageProductsBy(), query);
  const isLoading = !error && !data;
  return {
    isLoading,
    images: data?.data ?? defauftImageProducts,
    isError: Boolean(error),
  };
};

export { useImageProducts };
