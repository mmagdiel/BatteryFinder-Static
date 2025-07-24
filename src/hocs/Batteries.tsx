import type { BateriesProps } from "../models";

import { useReferenceProducts } from "../hooks";

import { Loading } from "../components/Loading";
import { BatteryResults } from "../components/public/BatteryResults";
import { Error } from "../components/Error";

const Batteries: BateriesProps = ({ paths }) => {
  const { batteries, isLoading, isError } = useReferenceProducts(paths);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return <BatteryResults batteries={batteries} />;
};

export { Batteries };
