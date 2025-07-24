import type { FC, ReactNode } from "react";
import type { Products } from "../../domains";

interface TableProductsInput {
  index: number;
  list: Products;
  children: ReactNode;
}

export type TableProductsProps = FC<TableProductsInput>;
