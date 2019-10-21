import React from "react";
import "./style.css";

function MatchCard(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="img-container">
        <img id={props.id} src={props.image} />
        <p>{props.name}</p>

      </div>
    </div>
  );
}

export default MatchCard;