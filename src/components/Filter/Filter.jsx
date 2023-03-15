import React, { useState } from "react";
import "./filter.scss"
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";
import Data from "../Data/Data";

const Filter = () => {

    const [filter, setFilter]=useState(false)

  return (
    <>
      <div 
         className="filter"
         onClick={()=>{
            setFilter(true)
         }}
      > Filter {filter===false?<BsFillCaretDownFill style={{marginLeft:"20%", marginTop:"3%"}}/>:<BsFillCaretUpFill style={{marginLeft:"20%", marginTop:"3%"}}/>} </div>

      {
        filter === true
        ? 
          <div className="filtershow">
            <div onClick={()=>setFilter(false)}>All</div>
            <div onClick={()=>setFilter(false)}>Pending</div>
            <div onClick={()=>setFilter(false)}>Done</div>
          </div>
        : null
      }

      <Data />
    </>
  );
};

export default Filter;
