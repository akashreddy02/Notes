import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6"; // Magnifying Glass Icon
import { IoMdClose } from "react-icons/io"; // Close Icon

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md shadow-md">
      {/* Magnifying Glass Icon */}
      <FaMagnifyingGlass
        onClick={handleSearch}
        className="text-gray-500 cursor-pointer"
      />

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search Notes"
        className="flex-1 bg-transparent border-none focus:outline-none text-gray-700"
      />

      <IoMdClose className="" onClick={onClearSearch} />
    </div>
  );
};

export default SearchBar;
