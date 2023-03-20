import React, { useEffect, useState } from "react";
import "./data.scss";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDoneTodo,
  deleteTodo,
  doneTodo,
  getTodo,
} from "../../redux/action/actions";
import nodata from "../../assets/Images/nodata.png";
import { useToast } from "@chakra-ui/react";

const Data = ({ filtername }) => {
  const todo = useSelector((store) => store.TodoReducer);
  const todoData = useSelector((store) => store.getTodoReducer)
  const done = useSelector((store) => store.doneTodoreducer);
  const dispatch = useDispatch();

  const toast = useToast();

  useEffect(()=>{
    dispatch(getTodo())
  }, [])

  return (
    <>
      {(todoData && todoData.length > 0 && filtername === "Filter") ||
      filtername === "All" ? (
        <div className="data">
          {todoData.map((el, i) => {
            return (
              <div className="datalist">
                <div>{i+1}</div>
                <div>{el.todo}</div>
                <div>
                  <button
                    className="datadone"
                    onClick={() => {
                      dispatch(doneTodo(el));
                      toast({
                        title: `${el.todo} marked as done.!`,
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                      });
                    }}
                  >
                    <BsCheckSquareFill />
                  </button>
                </div>
                <div>
                  <button
                    className="datadelete"
                    onClick={() => {
                      dispatch(deleteTodo(el.id));
                      toast({
                        title: `${el.todo} task deleted.!`,
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                      });
                    }}
                  >
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : filtername === "Done" ? (
        <div className="data">
          {done.map((el, i) => {
            return (
              <div className="datalist">
                <div>{i + 1}</div>
                <div>{el.todo}</div>
                <div>
                  <button
                    className="datadelete"
                    onClick={() => dispatch(deleteDoneTodo(el.id))}
                  >
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : filtername === "Pending" ? (
        <div className="data">
          {todo.map((el, i) => {
            if (el.pending === false) {
              return (
                <div className="datalist">
                  <div>{i + 1}</div>
                  <div>{el.todo}</div>
                  <div>
                    <button
                      className="datadone"
                      onClick={() => {
                        dispatch(doneTodo(el));
                      }}
                    >
                      <BsCheckSquareFill />
                    </button>
                  </div>
                  <div>
                    <button
                      className="datadelete"
                      onClick={() => dispatch(deleteTodo(el.id))}
                    >
                      <BsFillTrashFill />
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="nodata">
          <img src={nodata} />
        </div>
      )}
    </>
  );
};

export default Data;
