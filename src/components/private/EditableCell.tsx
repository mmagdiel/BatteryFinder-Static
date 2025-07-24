import type { EditableCellProps, HandleKeyboardVoid } from "../../models";

import { useState } from "react";
import clsx from "clsx";

const EditableCell: EditableCellProps = ({
  value,
  onSave,
  type = "text",
  options = null,
  isUnsaved = false,
}) => {
  const [editValue, setEditValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onSave(editValue ?? "");
    setIsEditing(false);
  };

  const handleKeyPress: HandleKeyboardVoid = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setEditValue(value);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    if (options) {
      return (
        <select
          value={editValue ?? ""}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyPress}
          className="select select-sm select-bordered w-full"
          autoFocus
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={type}
        value={editValue ?? ""}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyPress}
        className="input input-sm input-bordered w-full"
        autoFocus
      />
    );
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={clsx(
        "cursor-pointer hover:bg-base-200 p-1 rounded min-h-[2rem] flex items-center",
        isUnsaved && "bg-warning/20 border border-warning",
      )}
      title={isUnsaved ? "Unsaved changes" : ""}
    >
      {value || <span className="text-base-content/50">Click to edit</span>}
    </div>
  );
};

export { EditableCell };
