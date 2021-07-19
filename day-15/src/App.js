import './App.css';
import MemeCard from './components/MemeCard';
import Board from './components/Board';

import React, { useState } from 'react';

function App() {
  const [click, setClick] = useState(true)

  function clickedBtn(){
    setClick(!click);
  }


  return (
    <div className="App">
      {click?<MemeCard />: <Board />} 
       <button className="next" onClick = {clickedBtn} > &gt; </button>
    </div>
  );
}



export default App;