import type { FC } from "react";
import type { HandleTextVoid } from "../../utils";

interface EditableCellInput {
  value: string | null;
  onSave: HandleTextVoid;
  type?: string;
  options?: string[] | null;
  isUnsaved?: boolean;
}

export type EditableCellProps = FC<EditableCellInput>;
