import { createContext, useState } from "react";
const UserContext = createContext();

export function UserProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price) => {
    setItems((prevState) => [...prevState, { name, price }]);
  };

  return (
    <UserContext.Provider value={{ items, addToCart }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
