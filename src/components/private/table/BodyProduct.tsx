import type { BodyProductProps } from "../../../models";

import { Trash2, Upload, Eye } from "lucide-react";
import { EditableCell } from "../EditableCell";
import clsx from "clsx";

const BodyProduct: BodyProductProps = ({
  products,
  deletedItems,
  unsavedChanges,
  handleEdit,
  handleSyncItem,
  handleViewProduct,
  handleDelete,
}) => {
  return (
    <tbody>
      {products
        .filter((product) => !deletedItems.has(product.id))
        .map((product) => {
          const { id, reference, description, type, ah, cca } = product;
          const { long, width, high, cube, warranty } = product;
          const hasChanges = unsavedChanges.has(id);
          const isDeleted = deletedItems.has(id);
          return (
            <tr key={id} className={clsx(isDeleted && "opacity-50")}>
              <td>{id}</td>
              <td>
                <EditableCell
                  value={reference}
                  onSave={handleEdit(id, "reference")}
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={description}
                  onSave={handleEdit(id, "description")}
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={type}
                  onSave={handleEdit(id, "type")}
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={ah}
                  onSave={handleEdit(id, "ah")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={cca}
                  onSave={handleEdit(id, "cca")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={cube}
                  onSave={handleEdit(id, "cube")}
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={long}
                  onSave={handleEdit(id, "long")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={width}
                  onSave={handleEdit(id, "width")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={high}
                  onSave={handleEdit(id, "high")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={warranty}
                  onSave={handleEdit(id, "warranty")}
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <div className="flex gap-1">
                  {hasChanges && (
                    <button
                      className="btn btn-xs btn-success animate-bounce"
                      onClick={() => handleSyncItem(id)}
                      title="Sync this item"
                    >
                      <Upload className="w-3 h-3 text-white" />
                    </button>
                  )}

                  <button
                    className="btn btn-xs btn-primary text-white"
                    onClick={() => handleViewProduct(id)}
                    title="View this item"
                  >
                    <Eye className="w-3 h-3" />
                  </button>
                  <button
                    className="btn btn-xs btn-error text-white animate-pulse"
                    onClick={() => handleDelete(id)}
                    title="Delete this item"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
};

export { BodyProduct };
