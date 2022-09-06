import { useContext, useState } from "react";
import { UserContext } from "./hooks/context/UserContext";

function Component() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Component;
