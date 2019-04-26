import React from "react";
import "./style.css";

function CarTiles(props) {
  return (
    <div className="tile">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
     
      <span onClick={() => props.alreadyClicked(props.id)} className="picked">
      
      </span>
    </div>
  );
}

export default CarTiles;
