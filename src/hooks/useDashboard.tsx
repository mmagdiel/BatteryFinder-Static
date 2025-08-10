import useSWR from "swr";
import { queryDashboard } from "../services";
import { urlDashboardBy } from "../utils";
import type { MostProduct, Product } from "../models";

import type { UseDashboard, Dashboards } from "../models";

const defaultDashboard = {
  count_products: 0,
  count_vehicles: 0,
  most_searched_brand: {
    brand: "",
    frequency: 0,
  },
  most_searched_type: {
    type: "",
    frequency: 0,
  },
  most_searched_products: [] as MostProduct[],
  recent_products: [] as Product[],
};

const useDashboard: UseDashboard = () => {
  const { data, error } = useSWR<Dashboards>(urlDashboardBy(), queryDashboard);
  const isLoading = !error && !data;
  return {
    isLoading,
    dashboard: data?.data ?? defaultDashboard,
    isError: Boolean(error),
  };
};

export { useDashboard };
