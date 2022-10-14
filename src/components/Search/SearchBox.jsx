import React, { useRef } from "react";
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBox = ({ searchValue, SetSearchValue, setCurrentPage }) => {
  const inputRef = useRef(searchValue);
  
  const handleSearch = () => {
    SetSearchValue(inputRef.current.value);
    setCurrentPage(1);
  };

  const handleEnter = (e) =>{
    if (e.charCode === 13) {
      handleSearch();
    }
  }

  return (
    <div className="container">

      <div className="input-group mb-3">
          <input type="text" className="form-control  shadow-none" placeholder="Search all primary source documents" ref={inputRef} onKeyPress={(e)=>handleEnter(e)}/>
          <button type="submit" className="btn-outline-orange" onClick={handleSearch} >
            <AiOutlineSearch size={20}/>           
          </button>
          
        </div> 
    </div>
        
  );
};

export default SearchBox;
