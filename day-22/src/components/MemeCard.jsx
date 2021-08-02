import React from "react";

const MemeCard = (props) => {
  const memeClick = () => {
    props.setEdit(true);
    props.setEditMeme(props.template);
  };
  return (
    <div className="memeCard" onClick={memeClick}>
      <img src={props.template.url} alt="" srcSet="" />
      <p>{props.template.name}</p>
    </div>
  );
};

export default MemeCard;
