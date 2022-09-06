import React, { useContext } from "react";
import UserContext from "../hooks/context/UserContext";

const Chekout = () => {
  const { items } = useContext(UserContext);

  return (
    <div>
      <h2>Chekout</h2>
      <div>
        {items.map((item) => (
          <div className="chekout">
            <h2>{item.name}</h2>
            <h3>${item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chekout;
