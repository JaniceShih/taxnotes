import React from 'react';
import _ from 'lodash';
import { RiArrowLeftSFill } from 'react-icons/ri';
import { RiArrowRightSFill } from 'react-icons/ri';

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange} = props;

  const startIndex = (currentPage-1) * pageSize + 1;
  const endIndex = (currentPage) * pageSize;
  const pageCount = Math.ceil(itemsCount / pageSize);
 // const pages = _.range(1, pageCount + 1);

  if(pageCount <= 1) return null; 

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const prev = (currentPage !== 1) ?
      <>
          <div className="pageprev">
            <a onClick={onPrevious}>
              <RiArrowLeftSFill size={20}/>
              </a>
          </div>
          <div><a onClick={onPrevious}> PREV </a></div>
      </>
    : <></>

  const next = (currentPage !== (pageCount)) ?
      <>
          <div >
            <a onClick={onNext}> NEXT </a>
          </div>
          <div className="pagenext">
            <a onClick={()=>onNext()}>
              <RiArrowRightSFill size={20}/>
            </a>
          </div>
      </>
     :<></> 
  
 
  return ( 
      <div className=" pagebox d-flex justify-content-between align-items-center" >
        <div className='pagelink d-flex align-items-center '>
          {prev}
        </div>
        {/* {pages.map((page)=>(
          <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
          </li>
        ))} */}
        {` ${startIndex}-${endIndex} of ${itemsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} results`}
        <div className='pagelink d-flex align-items-center '>
          {next}
        </div>
      </div>
  )
}

export default Pagination