import React, { useEffect, useState } from "react";
import "./data.scss";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deletePendingTodo, deleteTodo, pendingTodo } from "../../redux/action/actions";
import nodata from "../../assets/Images/nodata.png"

const Data = ({ filtername }) => {

  const todo = useSelector((store) => store.TodoReducer);
  const done = useSelector((store)=>store.doneTodoreducer)
  const dispatch = useDispatch();

  useEffect(()=>{

  }, [])

  return (
    <>
      {todo && todo.length > 0 && filtername === 'Filter' || filtername === 'All' ? (
        <div className="data">
          {todo.map((el, i) => {
            return (
              <div className="datalist">
                <div>{i + 1}</div>
                <div>{el.todo}</div>
                <div>
                  <button 
                    className="datadone"
                    onClick={() => {
                      dispatch(pendingTodo(el))
                    }}>
                    <BsCheckSquareFill />
                  </button>
                </div>
                <div>
                  <button className="datadelete" onClick={() => dispatch(deleteTodo(el.id))}>
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : filtername === 'Done'
        ?
        <div className="data">
          {done.map((el, i) => {
            return (
              <div className="datalist">
                <div>{i + 1}</div>
                <div>{el.todo}</div>
                <div>
                  <button className="datadelete" onClick={() => dispatch(deletePendingTodo(el.id))}>
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        : filtername === 'Pending'
        ? 
        <div className="data">
          {todo.map((el, i) => {
            return(
              done.map((ele, index)=>{
                if(el.id !== ele.id){
                  return (
                    <div className="datalist">
                      <div>{i + 1}</div>
                      <div>{el.todo}</div>
                      <div>
                        <button 
                          className="datadone"
                          onClick={() => {
                            dispatch(pendingTodo(el))
                          }}>
                          <BsCheckSquareFill />
                        </button>
                      </div>
                      <div>
                        <button className="datadelete" onClick={() => dispatch(deleteTodo(el.id))}>
                          <BsFillTrashFill />
                        </button>
                      </div>
                    </div>
                  );
                }
              })
            )
          })}
        </div>
        : <div className="nodata"><img src={nodata} /></div>
    }
    </>
  );
};

export default Data;
