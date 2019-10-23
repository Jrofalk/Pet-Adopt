import React from "react";
import "./style.css";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <button className="btn btn-danger" tabIndex="0" data-id={props.id} onClick={props.handleDeletePet} >
        Delete
      </button>
      <div className="img-container">
        <img id={props.id} src={props.image} />
        <p>{props.name}</p>
        <p>{props.description}</p>

      </div>
    </div>
  );
}

export default Card;

