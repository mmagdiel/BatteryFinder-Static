import type { FC } from "react";
import type { Imgs } from "../../hooks";

interface TableImagesInput {
  images: Imgs[];
}

export type TableImagesProps = FC<TableImagesInput>;
