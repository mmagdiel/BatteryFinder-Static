import type { BrandProps } from "../models";

import { useBrandVehicles } from "../hooks";
import { Loading } from "../components/Loading";
import { Select } from "../components/public/Select";
import { Error } from "../components/Error";

const Brand: BrandProps = ({ type }) => {
  const { brands, isLoading, isError } = useBrandVehicles(type);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return <Select type={type} list={brands} />;
};

export { Brand };
