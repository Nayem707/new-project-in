import React, { useContext } from "react";
import UserContext from "../hooks/context/UserContext";

const Card = ({ name, price, title }) => {
  const { addToCart } = useContext(UserContext);

  return (
    <div className="card">
      <div className="product-box">
        <h1>{name}</h1>
        <p>{title}</p>
      </div>
      <div>${price}</div>
      <button onClick={() => addToCart(name, price)}>Add To Cart</button>
    </div>
  );
};

export default Card;
