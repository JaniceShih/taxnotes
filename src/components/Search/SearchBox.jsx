import React, { useRef } from "react";
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBox = ({ searchValue, SetSearchValue, setCurrentPage, jurisdiction, SetJurisdiction, SetPageSize }) => {
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

  const handleSelectPage = (e) =>{
    SetPageSize(Number(e.currentTarget.value));
  }

  const onlyOne = (e)=> {    
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

        
         {/* <div className = "">          */}
          <div className = "jurisdiction-filter d-flex justify-content-end">
           
            <div className = "form-check-inline text-dark">Filter search by jurisdiction: </div>

            <div className = "form-check d-flex  form-check-inline">
              <input className = "form-check-input" 
                type = "checkbox" 
                value = "Tax Notes Today Federal" 
                id = "federal"  
                name = "check" 
                defaultChecked
                onChange = {(e)=>onlyOne(e)}/>
              <label className = "form-check-label" for = "federal">
                  Federal
              </label>
            </div>

            <div className = "form-check d-flex  form-check-inline ">
              <input className = "form-check-input " 
                type = "checkbox" 
                value = "Tax Notes Today State" 
                id = "state"  
                name = "check" 
                onChange = {(e)=>onlyOne(e)}/>
              <label className = "form-check-label text-secondary" for = "state">
                State
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

            <div className="text-dark">
              Result per page:              
              <select className="form-select form-select form-select-sm text-muted" onChange={(e)=>handleSelectPage(e)}> 
                  {/* <option selected> Result per page</option>                 */}
                  <option value="20"> 20 </option>
                  <option value="50"> 50 </option>
                  <option value="100"> 100 </option>
                  <option value="200"> 200 </option>
                </select>
            </div> 
           
          </div>

        
          
      {/* </div> */}
    </div>
        
  );
};

export default SearchBox;
