import { useState } from "react";

const useStock = () => {
  const [stockDetails, setStockDetails] = useState([]);

  const setProducts = (products) => {
    if (stockDetails.length === 0) {
      const details = products.map((product) => {
        return { product, qty: product.stock };
      });
      setStockDetails(details);
    }
  };

  const getAllProducts = () => {
    return stockDetails.map((detail) => {
      return detail.product;
    });
  };

  const decrementStock = (product, qty) => {
    const currentDetail = stockDetails.find(
      (detail) => detail.product.id === product.id
    );
    if (currentDetail.qty - qty >= 0) {
      currentDetail.qty -= qty;
    }
  };

  const getStock = (product) => {
    const currentDetail = stockDetails.find(
      (detail) => detail.product.id === product.id
    );
    if (currentDetail) {
      return currentDetail.qty;
    }
    return 0;
  };

  return { setProducts, decrementStock, getStock, getAllProducts };
};

export default useStock;
