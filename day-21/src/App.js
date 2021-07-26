import Form from './components/Form';
import './App.css';
import React , {useState} from 'react';
import Item from './components/Item';

function App() {
  const [diet, setDiet] = useState([]);
  // console.log((diet));
  return (
    <div className="App">
      <Form diet={diet} setDiet={setDiet} />
      {
        diet.map(i => {
          return <Item key={i.id} id={i.id} diet={diet} setDiet={setDiet}/>
        })
      }
    </div>
  );
}

export default App;
