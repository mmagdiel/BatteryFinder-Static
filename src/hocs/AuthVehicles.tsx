import type { AuthVehiclesProps } from "../models";

import { useEffect } from "react";
import { useIndexVehicles } from "../hooks";
import { Loading, Error, TableVehicles } from "../components";

// const AuthVehicles = ({ fetch }: { fetch: <T>(url: string) => Promise<T> }) => {
const AuthVehicles: AuthVehiclesProps = ({
  params,
  children,
  handleDisable,
  handleAble,
}) => {
  const { vehicles, isLoading, isError } = useIndexVehicles(params);
  useEffect(() => {
    if (!isLoading && vehicles.next_page_url === null) {
      handleDisable();
    } else {
      handleAble();
    }
  }, [vehicles]);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return <TableVehicles list={vehicles.data}>{children}</TableVehicles>;
};

export { AuthVehicles };
