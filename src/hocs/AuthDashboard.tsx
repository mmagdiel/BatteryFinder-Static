import type { AuthDashboardProps } from "../models";

import { useDashboard } from "../hooks";
import { Loading } from "../components/Loading";

import { Error } from "../components/Error";
import { TableDashboard } from "../components";

const AuthDashboard: AuthDashboardProps = () => {
  const { dashboard, isLoading, isError } = useDashboard();
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return <TableDashboard dashboard={dashboard} />;
};

export { AuthDashboard };
