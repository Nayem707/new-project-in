import React, { useContext, useState } from "react";
import UserContext from "../hooks/context/UserContext";

const Chekout = () => {
  const { items } = useContext(UserContext);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Chekout</h2>
      <div>
        {items.map((item) => (
          <div className="chekout">
            <h2>{item.name}</h2>
            <h3>${item.price}</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <button onClick={() => setCount((c) => c - 1)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chekout;
