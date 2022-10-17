import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import Pagination from "./Pagination";
import {FetchAPI} from "../../utils/fetchAPI"


const Search = () => {
  const [itemsCount, setItemsCount] = useState(0);
  // const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, SetPageSize] = useState(20);
  const [searchValue, SetSearchValue] = useState("tax");
  const [taxResult, SetTaxResult] = useState(null);
  const [jurisdiction, SetJurisdiction] = useState("Tax Notes Today Federal");

  useEffect(() => {
    FetchAPI(searchValue, jurisdiction, currentPage, pageSize)
      .then((response) => response.json())    
      .then((result) => {
        console.log(result.hits.hits);
        setItemsCount(result.hits.total);
        SetTaxResult(result.hits.hits);    
      })
      .catch((error) => console.log("error", error));
  }, [searchValue, jurisdiction, currentPage, pageSize]);


  const handlePageChange = (page)=>{
    setCurrentPage(page);  
  }


  return (  
    <div className='container results'>   
      <h1>Search Results</h1>
      <div className="searchBox">
        <SearchBox
          searchValue = {searchValue}
          SetSearchValue = {SetSearchValue} 
          setCurrentPage = {setCurrentPage} 
          jurisdiction = {jurisdiction}  
          SetJurisdiction = {SetJurisdiction} 
          SetPageSize = {SetPageSize}
        />
      </div>
      <div>
        <Pagination 
            itemsCount = {itemsCount} 
            pageSize = {pageSize} 
            currentPage = {currentPage} 
            onPageChange = {handlePageChange}/> 

      </div>   
      <SearchResult 
        result = {taxResult} 
        searchValue = {searchValue}/>   

    </div>
  );
};

export default Search;
