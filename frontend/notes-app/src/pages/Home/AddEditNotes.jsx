import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null);

  const addNewNote = async () => {};
  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("please enter the title");
      return;
    }

    if (!content) {
      setError("please enter the content");
      return;
    }

    setError("");

    if (type === "edit") {
      EditNote();
    } else {
      addNewNote();
    }
  };
  return (
    <div>
      <button onClick={onClose}>
        <MdClose />
      </button>
      <div className="p-6 bg-white shadow-md rounded-md max-w-lg mx-auto mt-8">
        {/* Title Input */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Go to gym at 4:00 am"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        {/* Content Textarea */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            placeholder="Content"
            rows={10}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            value={content}
            onChange={({ target }) => setContent(target.value)}
          ></textarea>
        </div>
        {/* Tags Input */}
        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Tags
          </label>
          <TagInput tags={tags} setTags={setTags} /> {/* Correctly placed */}
        </div>
        {/* Add Button */}
        <div className="text-right">
          <button
            onClick={handleAddNote}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditNotes;
