import React from "react";
import "./style.css";

function Card(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img id={props._id} src={props.image}/>
          <p>{props.name}</p>
        </div>
      </div>
    );
  }

export default Card;