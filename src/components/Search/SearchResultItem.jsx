import React from "react";

const SearchResultItem = (props) => {
  const { item } = props; 
  
  return (
    <>
      <div className="item-container right">  
        <span className="docType ">{item.document_type.join(",")}</span>   
        <h2 className="headline">{item.title.join(",")} </h2>
        <span className="date">{item.date}</span>       
        <p className="snippet">{item.abstract}</p>
      </div>
    </>
  );
};

export default SearchResultItem;