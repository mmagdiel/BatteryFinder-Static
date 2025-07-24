import type { FC } from "react";
import type { WithAndWitOut } from "../../hooks";

interface SelectImagesInput {
  id: number;
  images: WithAndWitOut;
}

export type SelectImageProps = FC<SelectImagesInput>;
