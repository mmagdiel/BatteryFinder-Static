import type { PatternProps } from "../models";

import { usePatternVehicles } from "../hooks";

import { Loading } from "../components/Loading";
import { Choose } from "../components/public/Choose";
import { Error } from "../components/Error";

const Pattern: PatternProps = ({ brand, type }) => {
  const { patterns, isLoading, isError } = usePatternVehicles(type, brand);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return <Choose brand={brand} patterns={patterns} />;
};

export { Pattern };
