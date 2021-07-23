import Calory from "./components/Calory";
import './App.css'
import items from './Items';
import React, { useState } from "react";

function App() {
  console.log(items);
  const [food, setFood] = useState(items)
  return (
    <div className="App">
      {
        food.length===0?
        <div>List Empty</div>:
        food.map((i)=>{
          return <Calory key={i.id} title={i.title} cals={i.cals} img={i.img} it={food} itSt={setFood} id={i.id}/>
        })
      }
    </div>
  );
}

export default App;
