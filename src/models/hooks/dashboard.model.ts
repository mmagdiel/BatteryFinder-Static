import type { Dashboard } from "../domains";
import type { Response } from "./response.model";

interface ResponseDashboard {
  dashboard: Dashboard;
  isLoading: boolean;
  isError: boolean;
}

export type UseDashboard = () => ResponseDashboard;

export type Dashboards = Response<Dashboard>;
