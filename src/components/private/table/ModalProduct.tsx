import type { ModalProductProps } from "../../../models";

import { Trash2 } from "lucide-react";

const ModalProduct: ModalProductProps = ({
  handleCancelDelete,
  handleDelete,
  isModalOpen,
  idToDelete,
  label,
  list,
}) => {
  if (!isModalOpen || !idToDelete) return null;
  const item = list.find((item) => item.id === idToDelete);
  const itemName = item
    ? item.description || item.reference || `ID: ${item.id}`
    : `ID: ${idToDelete}`;
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Confirm Delete</h3>
        <p className="mb-4">Are you sure you want to delete this {label}?</p>
        <div className="bg-base-200 p-3 rounded-lg mb-4">
          <strong>{itemName}</strong>
        </div>
        <p className="text-sm text-base-content/70 mb-6">
          This action will mark the item for deletion. You can sync changes to
          make it permanent or discard changes to undo.
        </p>
        <div className="modal-action">
          <button className="btn btn-error" onClick={handleDelete}>
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </button>
          <button className="btn btn-ghost" onClick={handleCancelDelete}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalProduct };
