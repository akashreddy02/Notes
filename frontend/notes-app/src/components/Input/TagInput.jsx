import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "" && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {/* Render tags */}
      {tags?.length > 0 ? (
        <div className="flex flex-wrap gap-2 mb-4 max-h-32 overflow-y-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 px-2 py-1 rounded-md flex items-center"
            >
              # {tag}
              <button onClick={() => handleRemoveTag(tag)}>
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No tags added yet.</p>
      )}

      {/* Input field */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add Tags"
          className="px-3 py-2 border rounded-md flex-grow"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={addNewTag}
          className="text-xl text-blue-500"
          aria-label="Add new tag"
        >
          <MdAdd />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
