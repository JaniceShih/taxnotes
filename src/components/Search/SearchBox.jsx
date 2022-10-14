import React, { useRef } from "react";

const SearchBox = ({ searchValue, SetSearchValue, setCurrentPage }) => {
  const inputRef = useRef(searchValue);
  
  const handleSearch = () => {
    SetSearchValue(inputRef.current.value);
    setCurrentPage(1);
  };

  return (
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search all primary source documents" ref={inputRef} />
        <button type="submit" className="btn btn-outline-secondary" onClick={handleSearch}>
            Summit
          </button>
        </div>   
  );
};

export default SearchBox;
