import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white">
      <div className="flex items-center justify-between mb-2">
        {/* Title and Date */}
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-4">{content}</p>

      <p className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-md">
        {tags}
      </p>
      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        {/* Pin Button */}
        <MdOutlinePushPin
          className={`text-2xl cursor-pointer ${
            isPinned ? "text-yellow-500" : "text-gray-500"
          }`}
          onClick={onPinNote}
          title={isPinned ? "Unpin Note" : "Pin Note"}
        />

        <div className="flex gap-4">
          {/* Edit Button */}
          <MdCreate
            className="text-2xl text-blue-500 cursor-pointer"
            onClick={onEdit}
            title="Edit Note"
          />

          {/* Delete Button */}
          <MdDelete
            className="text-2xl text-red-500 cursor-pointer"
            onClick={onDelete}
            title="Delete Note"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
