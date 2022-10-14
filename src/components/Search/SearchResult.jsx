import React from "react";
import SearchResultItem from "./SearchResultItem";

const SearchResult = (props) => {
  const { result} = props;

  if (result === null || result.length === 0) 
    return <div className="noresulte">No Matched Result</div>;
 
  return (
    <div className="container">   
      {result.map((item, idx) => (
        <SearchResultItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default SearchResult;