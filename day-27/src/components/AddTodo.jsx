import React, { useState } from "react";
import { addTodo } from "../actions";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [inp, setInp] = useState("");
  return (
    <div>
      <input
        placeholder="Add Todo"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(inp));
          setInp("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTodo;
