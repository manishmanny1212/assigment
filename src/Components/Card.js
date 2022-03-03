import React from "react";
import "../Components/Card.css";

function Card(props) {
   console.log(props)

  return (
    <div className="card">
      <div className="card-user__image">
        <img src="https://avatars.dicebear.com/api/personas/your-custom-seed.svg" alt="image" srcset="" />
      </div>

      <div className="card-user__name"><h2>{props.name}</h2></div>
      <div className="card-user__compney"><span>Email: </span>{props.email}</div>
      <div className="card-user__compney"><span>Phone: </span>{props.phone}</div>
      <div className="card-user__compney"><span>Company: </span>{props.company}</div>
      <div className="card-user__compney"><span>Website: </span>{props.website}</div>
      <div className="card-user__compney"><span>Address: </span>{props.address}, {props.address1},{props.address2}</div>

    </div>
  );
}

export default Card;
