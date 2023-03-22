import React, { useState } from "react";
import "./filter.scss"
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";
import Data from "../Data/Data";

const Filter = () => {

    const [filter, setFilter]=useState(false)
    const [filtername, setFilterName]=useState('All')

  return (
    <>
      <div 
         className="filter"
         onClick={()=>{
            setFilter(true)
         }}
      > {filtername} {filter===false?<BsFillCaretDownFill style={{marginLeft:"20%", marginTop:"3%"}}/>:<BsFillCaretUpFill style={{marginLeft:"20%", marginTop:"3%"}}/>} </div>

      {
        filter === true
        ? 
          <div className="filtershow">
            <div 
              onClick={()=>{
                setFilter(false)
                setFilterName("All")
              }}>All</div>
            <div 
              onClick={()=>{
                setFilter(false)
                setFilterName("Pending")
              }}>Pending</div>
            <div 
              onClick={()=>{
                setFilter(false)
                setFilterName("Done")
              }}>Done</div>
          </div>
        : null
      }

      <Data 
        filtername={filtername}
        setFilterName={setFilterName}
      />
      
    </>
  );
};

export default Filter;
