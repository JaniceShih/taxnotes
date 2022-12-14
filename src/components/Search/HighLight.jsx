import React from "react";

const HighLight = (props) => {
  const {abstract, abstractId, searchValue} = props;

    let value = searchValue;

    value = value.replace(/[.*+?^{}() | [\]\\]/g, "\\$&");
    let pattern = new RegExp(`${value}`, "gi");

    let taxAbstract = document.getElementById(`${abstractId}`);
     

    if(taxAbstract){   
        taxAbstract.innerHTML = taxAbstract.textContent.replace(pattern, match => `<mark class="tnrl-highlight"> ${match} </mark>`);
    }
  return (
    <>   
      {/* {title} */}
    </>
  );
};

export default HighLight;