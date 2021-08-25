import React from "react";
import { useDispatch } from "react-redux";
import { nameAction, emailAction } from "../actions/index";

const Form = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(inp) => dispatch(nameAction(inp.target.value))}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(inp) => dispatch(emailAction(inp.target.value))}
        />
      </form>
    </div>
  );
};

export default Form;
