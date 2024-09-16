import { createContext, useState } from "react";

export const CartContext = createContext();

const Context = ({ children }) => {
  const [fakeEntry, setFakeEntry] = useState(
    JSON.parse(localStorage.getItem("product")) || []
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <CartContext.Provider
      value={{ fakeEntry, setFakeEntry, quantity, setQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Context;
