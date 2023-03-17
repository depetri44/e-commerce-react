import React from "react";
import { createContext } from "react";
import useAccountant from "../components/hooks/useAccountant";
import useCart from "../components/hooks/useCart";
import useStock from "../components/hooks/useStock";

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const { count, stock } = useAccountant(0);
  const {
    onProductAdded,
    cartDetails,
    getTotal,
    onProductRemove,
    onClearCart,
    getCartDetailToSave,
  } = useCart();

  const { setProducts, decrementStock, getStock, getAllProducts } = useStock();

  return (
    <CardContext.Provider
      value={{
        stock,
        count,
        onProductAdded,
        cartDetails,
        getTotal,
        onProductRemove,
        decrementStock,
        onClearCart,
        getStock,
        setProducts,
        getCartDetailToSave,
        getAllProducts,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
