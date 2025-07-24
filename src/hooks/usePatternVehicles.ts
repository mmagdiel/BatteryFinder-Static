import useSWR from "swr";
import { query } from "../services";
import { urlPatternBy } from "../utils";

import type { UsePatternVehicles, PatternVehicles } from "../models";

const usePatternVehicles: UsePatternVehicles = (type, brand) => {
  const { data, error } = useSWR<PatternVehicles>(
    urlPatternBy(type, brand),
    query,
  );
  const isLoading = !error && !data;
  return { isLoading, patterns: data?.data ?? [], isError: Boolean(error) };
};

export { usePatternVehicles };
