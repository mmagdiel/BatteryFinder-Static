import type { FC } from "react";
import type { Product } from "../../../domains";
import type { HandleVoid } from "../../../utils";

interface AsideProductInput {
  product: Product | null;
  handleClose: HandleVoid;
}

export type AsideProductProps = FC<AsideProductInput>;
