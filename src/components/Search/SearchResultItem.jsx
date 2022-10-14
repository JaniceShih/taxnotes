import React, {useEffect} from "react";
import HighLight from "./HighLight";

const SearchResultItem = (props) => {
  const { keyid, item, searchValue } = props;  

  const title = item.title.join(",");
  const abstract = item.abstract;
    
  return (
    <>
      <div className="item-container right">  
        <span className="docType ">{item.document_type.join(",")}</span> 
        <h2 id={`title${keyid}`} className="headline">{title}</h2>  
        {/* <h2 id={`title${keyid}`} className="headline">{title}          
          <HighLight title = {item.title.join(",")} titleId={`title${keyid}`} searchValue={searchValue}/> 
        </h2> */}
        <span className="date">{item.date}</span>       
        <p id={`abstract${keyid}`} className="snippet">{abstract}
        <HighLight abstract = {abstract} abstractId={`abstract${keyid}`} searchValue={searchValue}/> </p>
      </div>
    </>
  );
};

export default SearchResultItem;