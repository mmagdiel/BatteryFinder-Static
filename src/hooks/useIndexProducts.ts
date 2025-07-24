import useSWR from "swr";
import { query } from "../services";
import { urlProductsBy } from "../utils";

import type { UseIndexProducts, IndexProducts } from "../models";

//const useIndexProducts: UseIndexProducts = (fetch) => {
const useIndexProducts: UseIndexProducts = (params) => {
  const { data, error } = useSWR<IndexProducts>(urlProductsBy(params), query);
  const isLoading = !error && !data;
  return {
    isLoading,
    products: data?.data ?? {
      data: [],
      current_page: 0,
      current_page_url: null,
      first_page_url: null,
      from: 0,
      next_page_url: null,
      path: null,
      per_page: 0,
      prev_page_url: null,
      to: 0,
    },
    isError: Boolean(error),
  };
};

export { useIndexProducts };
