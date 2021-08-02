import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Form.css";
const Form = (props) => {
  const [food, setFood] = useState("");
  const [cal, setCal] = useState(0);

  function submitForm(event) {
    if (food === "" || cal <= 0) {
      alert("Enter correct values");
      event.preventDefault();
    } else {
      event.preventDefault();
      props.setDiet([
        ...props.diet,
        { id: props.diet.length, title: food, cal: cal },
      ]);
      setFood("");
      setCal(0);
    }
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="item">Food: </label>
      <input
        type="text"
        name="item"
        id="item"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <label htmlFor="calory">Calories: </label>
      <input
        type="number"
        name="calory"
        id="calory"
        value={cal}
        onChange={(e) => setCal(e.target.value)}
      />
      <br />
      <button>
        <AddIcon />
      </button>
    </form>
  );
};

export default Form;
