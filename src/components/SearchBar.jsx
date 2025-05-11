import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Buscar producto:</label>
      <input
        type="text"
        id="search"
        placeholder="Buscar por descripción o ID"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
