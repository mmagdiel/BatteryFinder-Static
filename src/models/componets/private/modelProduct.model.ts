import type { FC } from "react";
import type { HandleVoid } from "../../utils";
import type { Products } from "../../domains";

interface ModalProductInput {
  handleCancelDelete: HandleVoid;
  handleDelete: HandleVoid;
  isModalOpen: boolean;
  idToDelete: number;
  label: string;
  list: Products;
}

export type ModalProductProps = FC<ModalProductInput>;
