import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../hooks/context/UserContext";

const Navbar = () => {
  const { items } = useContext(UserContext);

  return (
    <nav className="nav">
      <Link to={"/"}>
        <h2>Home</h2>
      </Link>
      <Link to={"/products"}>
        <h2>Products</h2>
      </Link>
      <Link to={"/chekout"}>
        <div className="cart">
          <h2>
            Cart<span> {items.length}</span>
          </h2>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
