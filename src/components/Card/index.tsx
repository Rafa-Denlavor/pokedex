import { Link } from "react-router-dom";
import "./Card.css";
import React from "react";

type TCardProps = {
  id: string;
  image: string;
  name: string;
}

const Card = ({ id, image, name } : TCardProps) => {
  return (
    <Link id={id} to={`/details/${id}`} className="cardWrapper">
      <div className="background-image" />
      <img className="image" src={image} />
      <p className="position">#{id}</p>
      <h1 className="name">{name}</h1>
    </Link>
  );
};

export default Card;
