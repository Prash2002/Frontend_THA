import React, { useState, useEffect } from "react";
import { username, pass } from "../token";
const MemeEdit = (props) => {
  const [boxes, setBoxes] = useState([]);
  const [complete, setComplete] = useState(false);
  const [mem, setMem] = useState('');
  console.log(props.meme);

  const diffTemp = () => {
    props.setEdit(false);
  };

  const generate = async () => {
    var url = `https://api.imgflip.com/caption_image?template_id=${props.meme.id}&username=${username}&password=${pass}`;
    for(var i=0; i<props.meme.box_count; i++){
      if(boxes[i]===undefined) boxes[i]={ "text": `Caption ${i + 1}`};
      url += `&boxes[${i}][text]=${boxes[i].text}`;
    };
    const data = await fetch(url);
    const jsonData = await data.json();
    console.log(jsonData);
    setMem(jsonData.data.url);
    setComplete(true);
  };
  return (
    
    <div className="editMeme">
      <p>{props.meme.name}</p>
      
      {
        complete? <div>
          
          <img src={mem} />
        </div>:
    <>
        <img src={props.meme.url} />
      <div className="input">
        {[...Array(props.meme.box_count)].map((i, index) => {
          
          return (
            <input
            key={index}
            placeholder={`Caption ${index + 1}`}
            onChange={(e) => {
              boxes[index] = { text: e.target.value };
              setBoxes(boxes);
            }}
            ></input>
            );
          })}
      </div>
      <button onClick={generate}>Generate Meme</button></>
        }
      <button onClick={diffTemp}>Choose Template</button>
    </div>
    
  );
};

export default MemeEdit;
