// import { render } from "react-dom";
import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      clicked: false,
    }
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(){
    this.setState({
      clicked: true,
    })
  }

  render(){
    return (
      <div className="App">
        <h1>SPA react</h1>
        <p>Click on the button</p>
        {
          this.state.clicked?
        <div className="text">You Clicked on it!</div>:
        <button onClick={this.clickHandle}> Click me ! </button>
        }
      </div>
    );
  }
}

export default App;
