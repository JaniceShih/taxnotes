import React, { useRef } from "react";
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBox = ({ searchValue, SetSearchValue, setCurrentPage, jurisdiction, SetJurisdiction }) => {
  const inputRef = useRef(searchValue);
  
  const handleSearch = () => {
    SetSearchValue(inputRef.current.value);
    setCurrentPage(1);
    // SetJurisdiction("All");
  };

  const handleEnter = (e) =>{
    if (e.charCode === 13) {
      handleSearch();
    }
  }

  const onlyOne = (e)=> { 
    // e.preventDefault();  
    let checkboxes = document.getElementsByName('check');      
    checkboxes.forEach((item) => {        
        if (item.id === e.currentTarget.id) {           
          SetJurisdiction(e.currentTarget.value);     
          item.checked = true;
        }else{        
          item.checked = false;
        }
        
    })
  }

  return (
    <div className = "container">

      <div className = "input-group mb-3">
          <input type = "text" className = "form-control  shadow-none" placeholder = "Search all primary source documents" ref = {inputRef} onKeyPress = {(e) =>handleEnter(e)}/>
          <button type = "submit" className = "btn-outline-orange" onClick = {handleSearch} >
            <AiOutlineSearch size = {20}/>           
          </button>
          
        </div> 

         <div className = "">
          {/* <div>Filter search by jurisdiction: </div> */}
          <div className = "jurisdiction-filter d-flex justify-content-end">
            <div className = "form-check-inline">Filter search by jurisdiction: </div>

            <div className = "form-check d-flex  form-check-inline">
              <input className = "form-check-input" 
                type = "checkbox" 
                value = "Tax Notes Today State" 
                id = "state"  
                name = "check" 
                onChange = {(e)=>onlyOne(e)}/>
              <label className = "form-check-label" for = "state">
                State
              </label>
            </div>

            <div className = "form-check d-flex  form-check-inline">
              <input className = "form-check-input" 
                type = "checkbox" 
                value = "Tax Notes Today Federal" 
                id = "federal"  
                name = "check" 
                onChange = {(e)=>onlyOne(e)}/>
              <label className = "form-check-label" for = "federal">
                  Federal
              </label>
            </div>

            <div className = "form-check d-flex  form-check-inline">
              <input className = "form-check-input" 
                type = "checkbox" 
                value = "All"
                id = "all"  
                name ="check" 
                onChange = {(e)=>onlyOne(e)}               
                />
              <label className = "form-check-label" for = "all">
                All
              </label>
            </div>
           
          </div>
          
      </div>
    </div>
        
  );
};

export default SearchBox;
