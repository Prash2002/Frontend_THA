import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delTodo, loadTodo } from "../actions";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  return (
    <>
      <button
        onClick={() => {
          dispatch(loadTodo());
        }}
      >
        Load Todos
      </button>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            {todo}
            <button
              onClick={() => {
                dispatch(delTodo(index));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
