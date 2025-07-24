import type { FC, ReactNode } from "react";
import type { HandleVoid } from "../utils";

interface AuthProductsInput {
  index: number;
  children: ReactNode;
  handleDisable: HandleVoid;
  handleAble: HandleVoid;
}

export type AuthProductsProps = FC<AuthProductsInput>;
