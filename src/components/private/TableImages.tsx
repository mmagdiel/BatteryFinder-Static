import type { TableImagesProps } from "../../models";

import { Layout } from "./Layout";
import { CardImage } from "./CardImage";
import { urlShowImageBy } from "../../utils";
import { AuthImageProducts } from "../../hocs";

const TableImages: TableImagesProps = ({ images }) => {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Images</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-96">
          <CardImage label="Subir Image" />
          {images.map((image) => (
            <div
              key={image.id}
              className="card bg-base-100 shadow-xl transition-all duration-200"
            >
              <figure className="px-4 pt-4">
                <div className="w-full h-64 bg-base-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <img
                    src={`${urlShowImageBy(image.name)}`}
                    alt={image.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </figure>
              <div className="card-body">
                <AuthImageProducts id={image.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export { TableImages };
