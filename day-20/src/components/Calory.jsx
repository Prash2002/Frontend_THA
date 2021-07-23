import React from 'react';
import './Calory.css';


const Calory = (props) => {
    var color = "rgb(6, 214, 160)";
    var c = "rgb(7, 59, 76)"
    if(props.cals> 250){
        color= "rgb(239, 71, 111)";
        c= "white"
    }
    
    function deleteItem(){
        console.log(props)
        var x = props.it.filter((i)=>i.id!==props.id);
        props.itSt(x)
    }

    return (
        <div className="container" style={{backgroundColor: color, color: c}}>
            <div className="item">{props.title}</div>
            <button onClick={deleteItem}>delete</button>
            <img src={props.img} alt="can't load" />
            <div className="cal">Contains {props.cals} cals</div>
        </div>
    )
}

export default Calory
