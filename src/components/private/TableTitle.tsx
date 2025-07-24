import type { TableTitleProps } from "../../models";
import { Plus, Eraser, CloudUpload } from "lucide-react";

const TableTitle: TableTitleProps = ({
  title,
  getTotalChanges,
  handleSyncChanges,
  handleDiscardChanges,
  handleAddNew,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex gap-2">
        {getTotalChanges() > 0 && (
          <>
            <button
              className="btn btn-success text-white animate-bounce"
              onClick={handleSyncChanges}
            >
              <CloudUpload className="w-4 h-4 mr-2" />
              <span className="text-white">
                Sync All Changes ({getTotalChanges()})
              </span>
            </button>
            <button
              className="btn btn-warning animate-pulse"
              onClick={handleDiscardChanges}
            >
              <Eraser className="w-4 h-4 mr-2" />
              Discard All Changes
            </button>
          </>
        )}
        <button className="btn btn-primary" onClick={handleAddNew}>
          <Plus className="w-4 h-4 mr-2" />
          Add {title}
        </button>
      </div>
    </div>
  );
};

export { TableTitle };
