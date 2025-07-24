import type { FC } from "react";
import type { Patterns } from "../../domains";

interface ChooseInput {
  brand: string;
  patterns: Patterns;
}

export type ChooseProps = FC<ChooseInput>;
