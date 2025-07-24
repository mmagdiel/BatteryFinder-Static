import type { FC } from "react";
import type { Dashboard } from "../../domains";

interface TableDashboardInput {
  dashboard: Dashboard;
}

export type TableDashboardProps = FC<TableDashboardInput>;
