import React from "react";
import "./style.css";

function UserCards(props) {
  console.log(props);
  return (
    <div className="card">
      <button className="btn btn-danger" tabIndex="0" >
        Delete
      </button>
      <div className="img-container">
        <img id={props.id} src={props.image} />
        <p>{props.name}</p>
        <a href={"mailto:" + props.email}>Email</a>
        <p>{props.telephone}</p>
      </div>
    </div>
  );
}

export default UserCards;