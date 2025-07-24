import useSWR from "swr";
import { query } from "../services";
import { urlBrandBy } from "../utils";

import type { UseBrandVehicles, BrandVehicles } from "../models";

const useBrandVehicles: UseBrandVehicles = (type) => {
  const { data, error } = useSWR<BrandVehicles>(urlBrandBy(type), query);
  const isLoading = !error && !data;
  return { isLoading, brands: data?.data ?? [], isError: Boolean(error) };
};

export { useBrandVehicles };
