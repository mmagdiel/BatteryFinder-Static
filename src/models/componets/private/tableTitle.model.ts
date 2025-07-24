import type { FC } from "react";
import type { HandleVoid } from "../../utils";

interface TableTitleInput {
  title: string;
  getTotalChanges: () => number;
  handleSyncChanges: HandleVoid;
  handleDiscardChanges: HandleVoid;
  handleAddNew: HandleVoid;
}

export type TableTitleProps = FC<TableTitleInput>;
