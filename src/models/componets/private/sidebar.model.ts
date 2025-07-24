import type { FC } from "react";
import type { HandleVoid } from "../../utils";

interface SidebarInput {
  isExpanded: boolean;
  handleOpen: HandleVoid;
  handleClose: HandleVoid;
}

export type SidebarProps = FC<SidebarInput>;
