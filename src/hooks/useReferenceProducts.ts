import useSWR from "swr";
import { query } from "../services";
import { urlBatteryBy } from "../utils";

import type { UseReferenceProducts, ReferenceProducts } from "../models";

const useReferenceProducts: UseReferenceProducts = (paths) => {
  const { data, error } = useSWR<ReferenceProducts>(urlBatteryBy(paths), query);
  const isLoading = !error && !data;
  return { isLoading, batteries: data?.data ?? [], isError: Boolean(error) };
};

export { useReferenceProducts };
