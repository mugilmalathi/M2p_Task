import React, { useEffect, useDeleteCheck, useState } from "react";
import "./data.scss";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodo, updateTodo } from "../../redux/action/actions";
import nodata from "../../assets/Images/nodata.png";
import { useToast } from "@chakra-ui/react";

const Data = ({ filtername }) => {

  const todo = useSelector((store) => store.TodoReducer);
  const dispatch = useDispatch();
  const toast = useToast();
  const [deleteCheck, setDeleteCheck] = useState(false);
  const [updateCheck, setUpdateCheck] = useState(false)

  useEffect(() => {
    dispatch(getTodo())
  }, [deleteCheck, updateCheck]);

  const updateTodoData=(e)=>{
    dispatch(updateTodo(e));
    setUpdateCheck((prev) => !prev);
    dispatch(getTodo())
    toast({
      title: `${e.todo} marked as done.!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }

  const deleteTodoData=(e)=>{
    dispatch(deleteTodo(e._id));
    setDeleteCheck((prev) => !prev);
    dispatch(getTodo());
    toast({
      title: `${e.todo} task deleted.!`,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <div>
      {filtername === "All" ? (
        <div className="data">
          {todo && todo?.length > 0
            ? todo?.map((el, i) => {
                if (el?.status === "All" || el?.status === "done") {
                  return (
                    <div
                      className={`datalist ${
                        el.status === "done" ? "datalist-done" : ""
                      }`}
                    >
                      <div>{i + 1}</div>
                      <div>{el.todo}</div>
                      <div>
                        <button
                          className="datadone"
                          style={{
                            display: el.status === "done" ? "none" : "block",
                          }}
                          onClick={(e)=>{updateTodoData(el)}}
                        >
                          <BsCheckSquareFill />
                        </button>
                      </div>
                      <div>
                        <button
                          className="datadelete"
                          onClick={() => {deleteTodoData(el)}}
                        >
                          <BsFillTrashFill />
                        </button>
                      </div>
                    </div>
                  );
                }
              })
            : null}
        </div>
      ) : filtername === "Pending" ? (
        <div className="data">
          {todo.length > 0 &&
            todo.map((el, i) => {
              if (el.status === "All") {
                return (
                  <div className="datalist">
                    <div></div>
                    <div>{el.todo}</div>
                    <div>
                      <button
                        className="datadone"
                        onClick={(e)=>{updateTodoData(el)}}
                      >
                        <BsCheckSquareFill />
                      </button>
                    </div>
                    <div>
                      <button
                        className="datadelete"
                        onClick={() => {deleteTodoData(el)}}
                      >
                        <BsFillTrashFill />
                      </button>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      ) : filtername === "Done" ? (
        <div className="data">
          {todo.length > 0 &&
            todo.map((el, i) => {
              if (el.status === "done") {
                return (
                  <div className={`datalist ${
                    el.status === "done" ? "datalist-done" : ""
                  }`}>
                    <div></div>
                    <div>{el.todo}</div>
                  </div>
                );
              }
            })}
        </div>
      ) : (
        <div className="nodata" style={{ border: "1px solid red" }}>
          <img src={nodata} />
        </div>
      )}
    </div>
  );
};

export default Data;
