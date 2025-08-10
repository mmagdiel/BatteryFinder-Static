import useSWR from "swr";
import { queryImages } from "../services";
import { urlImagesBy } from "../utils";

import type { UseImages, Images } from "../models";

const useImages: UseImages = () => {
  const { data, error } = useSWR<Images>(urlImagesBy(), queryImages);
  const isLoading = !error && !data;
  return { isLoading, images: data?.data ?? [], isError: Boolean(error) };
};

export { useImages };
