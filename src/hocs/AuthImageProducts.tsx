import type { AuthImageProductsProps } from "../models";
import { useImageProducts } from "../hooks";

import { Loading } from "../components/Loading";

import { Error } from "../components/Error";
import { SelectImages } from "../components";

const AuthImageProducts: AuthImageProductsProps = ({ id }) => {
  const { images, isLoading, isError } = useImageProducts();
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return <SelectImages images={images} id={id} />;
};

export { AuthImageProducts };
