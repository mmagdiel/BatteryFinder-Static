import useSWR from "swr";
import { query } from "../services";
import { urlVehiclesBy } from "../utils";

import type { UseIndexVehicles, IndexVehicles } from "../models";

//const useIndexVehicles: UseIndexVehicles = (fetch) => {
const useIndexVehicles: UseIndexVehicles = (params) => {
  const { data, error } = useSWR<IndexVehicles>(urlVehiclesBy(params), query);
  const isLoading = !error && !data;
  return {
    isLoading,
    vehicles: data?.data ?? {
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

export { useIndexVehicles };
