import React from 'react';
import './Calory.css';
const Calory = (props) => {
    return (
        <div class="container">
            <div className="item">{props.title}</div>
            <img src={props.img} alt="can't load image" />
            <div className="cal">Contains {props.cals} cals</div>
        </div>
    )
}

export default Calory
