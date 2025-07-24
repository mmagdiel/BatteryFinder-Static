import type { AsideProductProps } from "../../../models";
import { urlShowImageBy } from "../../../utils";

const AsideProduct: AsideProductProps = ({ product, handleClose }) => {
  return (
    <div className="drawer-side z-99" style={{ width: "calc(100% - 16px)" }}>
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
        onClick={handleClose}
      ></label>
      <div className="bg-base-200 text-base-content min-h-full w-96 p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Product Details</h3>
          <button onClick={handleClose} className="btn btn-sm btn-circle">
            ✕
          </button>
        </div>
        {product && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Reference
              </label>
              <p className="text-sm bg-base-100 p-2 rounded">
                {product.reference ?? "-"}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <p className="text-sm bg-base-100 p-2 rounded">
                {product.description ?? "-"}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Image</label>
              <img
                width={280}
                alt={product.description}
                src={`${urlShowImageBy(product.image)}`}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {product.type ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Warranty
                </label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {product.warranty ?? "-"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">AH</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {product.ah ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CCA</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {product.cca ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Cube</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {product.cube ?? "-"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">Length</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {product.long ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Width</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {product.width ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Height</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {product.high ?? "-"}
                </p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Created At
              </label>
              <p className="text-xs bg-base-100 p-2 rounded">
                {new Date(product.created_at).toLocaleString()}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Updated At
              </label>
              <p className="text-xs bg-base-100 p-2 rounded">
                {new Date(product.updated_at).toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { AsideProduct };
