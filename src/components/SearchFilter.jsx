import React from "react";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search for a citizen"
      className="search-bar"
    />
  );
};

export default SearchFilter;
