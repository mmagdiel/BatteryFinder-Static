import type { AuthImagesProps } from "../models";

import { useImages } from "../hooks";
import { Loading } from "../components/Loading";

import { Error } from "../components/Error";
import { TableImages } from "../components";

const AuthImages: AuthImagesProps = () => {
  const { images, isLoading, isError } = useImages();
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return <TableImages images={images} />;
};

export { AuthImages };
