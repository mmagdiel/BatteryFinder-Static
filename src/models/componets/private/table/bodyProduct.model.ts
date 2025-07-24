import type { FC } from "react";
import type { Products } from "../../../domains";
import type { HandleIDVoid, HandleIDValueVoid } from "../../../utils";

interface BodyProductInput {
  products: Products;
  deletedItems: Set<number>;
  handleDelete: HandleIDVoid;
  unsavedChanges: Set<number>;
  handleSyncItem: HandleIDVoid;
  handleEdit: HandleIDValueVoid;
  handleViewProduct: HandleIDVoid;
}

export type BodyProductProps = FC<BodyProductInput>;
