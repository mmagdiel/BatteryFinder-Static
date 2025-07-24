import { useIndexProducts } from "../hooks";
import { Loading, Error, TableProducts } from "../components";
import type { AuthProductsProps } from "../models";
import { useEffect } from "react";

const AuthProducts: AuthProductsProps = ({
  index,
  children,
  handleDisable,
  handleAble,
}) => {
  const { products, isLoading, isError } = useIndexProducts(index);
  useEffect(() => {
    if (!isLoading && products.next_page_url === null) {
      handleDisable();
    } else {
      handleAble();
    }
  }, [products]);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <TableProducts list={products.data} index={index}>
      {children}
    </TableProducts>
  );
};

export { AuthProducts };
