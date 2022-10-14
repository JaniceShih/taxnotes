import React, {useEffect} from "react";

const SearchResultItem = (props) => {
  const { keyid, item, searchValue } = props;  

  const title = item.title.join(",");

    // keyword highlight
    
  return (
    <>
      <div className="item-container right">  
        <span className="docType ">{item.document_type.join(",")}</span>   
        <h2 id={`title${keyid}`}className="headline">{title}</h2>
        <span className="date">{item.date}</span>       
        <p className="snippet">{item.abstract}</p>
      </div>
    </>
  );
};

export default SearchResultItem;