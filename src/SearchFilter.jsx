import React from "react";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
