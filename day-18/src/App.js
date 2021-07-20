import './App.css';
import Box from './Components/Box'

function createRow(row) {
  let arr = []
  var color;
  for(var i=0; i<8; i++){
    if(row%2===0){
      color = i%2===0? "black" : "white";
    }
    else{
      color = i%2!==0? "black" : "white";
    }
    arr.push(<Box clr={color} key={i}/>)
  }
  return arr;
}

function createChess() {
  let arr = [];
  for(var i=0; i<8; i++){
    arr.push(<div className="row" key={i+8}>{createRow(i)}</div> );
  }
  return arr;
}

function App() {
  
  return (
    <div className="App">
      {createChess()}
    </div>
  );
}

export default App;
