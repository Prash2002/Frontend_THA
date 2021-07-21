import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {

    constructor(){
        super();
        this.state={
            count: 0,
        }
        this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState(prevState => ({
            count: prevState.count+1
        }))
    }

    render() {
        return (
            <div>
                <h3 className="ele">Count: </h3>
                <button onClick={this.increment}>{this.state.count}</button>
            </div>
        )
    }
}

export default Counter
