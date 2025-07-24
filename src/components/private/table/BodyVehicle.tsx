import type { BodyVehicleProps } from "../../../models";

import { Trash2, Upload, Eye } from "lucide-react";
import { EditableCell } from "../EditableCell";
import clsx from "clsx";

const BodyVehicle: BodyVehicleProps = ({
  vehicles,
  deletedItems,
  unsavedChanges,
  handleEdit,
  handleSyncItem,
  handleViewVehicle,
  handleDelete,
}) => {
  return (
    <tbody>
      {vehicles
        .filter((vehicle) => !deletedItems.has(vehicle.id))
        .map((vehicle) => {
          const { id, brand, pattern, type, nb, cube } = vehicle;
          const { gold, gold2, red, red2, agm, efb, efb2 } = vehicle;
          const { velko, velko2, batteryNumber, confirmation } = vehicle;
          const hasChanges = unsavedChanges.has(id);
          const isDeleted = deletedItems.has(id);
          return (
            <tr key={id} className={clsx(isDeleted && "opacity-50")}>
              <td>{id}</td>
              <td>
                <EditableCell
                  value={brand}
                  onSave={handleEdit(id, "brand")}
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={pattern}
                  onSave={handleEdit(id, "pattern")}
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={type}
                  onSave={handleEdit(id, "type")}
                  isUnsaved={hasChanges}
                  options={["light", "heavy"]}
                />
              </td>
              <td>
                <EditableCell
                  value={nb}
                  onSave={handleEdit(id, "nb")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={batteryNumber}
                  onSave={handleEdit(id, "batteryNumber")}
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
                  value={gold}
                  onSave={handleEdit(id, "gold")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={gold2}
                  onSave={handleEdit(id, "gold2")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={red}
                  onSave={handleEdit(id, "red")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={red2}
                  onSave={handleEdit(id, "red2")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={agm}
                  onSave={handleEdit(id, "agm")}
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={efb}
                  onSave={handleEdit(id, "efb")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={efb2}
                  onSave={handleEdit(id, "efb2")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={velko}
                  onSave={handleEdit(id, "velko")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={velko2}
                  onSave={handleEdit(id, "velko2")}
                  type="number"
                  isUnsaved={hasChanges}
                />
              </td>
              <td>
                <EditableCell
                  value={confirmation}
                  onSave={handleEdit(id, "confirmation")}
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
                    onClick={() => handleViewVehicle(id)}
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

export { BodyVehicle };
