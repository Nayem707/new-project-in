import React from "react";
import style from "./home.module.css";

import DataFatch from "../components/components/DataFatch";
const Home = () => {
  return (
    <div className={style.home}>
      <h2>Home Page</h2>
      <DataFatch />
    </div>
  );
};

export default Home;
