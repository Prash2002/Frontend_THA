import React from 'react';
import './Board.css';

const Board = () => {
    var rows = [];
    for( var i=0; i<8; i++){
        rows.push(<div className="box"/>);
    }
    return (
        <div className="chess">
           <div className="row">{rows}</div>
           <div className="row">{rows}</div>
           <div className="row">{rows}</div>
           <div className="row">{rows}</div>
           <div className="row">{rows}</div>
           <div className="row">{rows}</div>
           <div className="row">{rows}</div>
           <div className="row">{rows}</div>
        </div>
    )
}

export default Board
