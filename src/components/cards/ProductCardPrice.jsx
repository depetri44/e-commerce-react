import React from "react";
import useAccountant from "../hooks/useAccountant";
import ItemCount from "./ItemCount";
import AddToCart from "./AddToCart";

import { Box } from "@mui/system";
import { Alert, Typography } from "@mui/material";

const ProductCardPrice = ({ onProductAdded, product }) => {
  const { increase, decrease, count } = useAccountant(1);
  const { price, offerPrice, stock } = product;
  return (
    <>
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <Box m={2}>
          <Typography
            variant="p"
            sx={{
              justifyContent: "center",
              display: "flex",
              textDecoration: "line-through",
            }}
          >
            {price}
          </Typography>
        </Box>
        <Box m={2}>
          <Typography
            variant="p"
            //color="text.secondary"
            sx={{ justifyContent: "center", display: "flex", color: "red" }}
          >
            {`$${(price - (price * offerPrice) / 100) * count}`}
          </Typography>
        </Box>
      </Box>

      <Box m={2} sx={{ justifyContent: "center", display: "flex" }}>
        <ItemCount
          increase={() => {
            increase();
          }}
          decrease={() => {
            decrease();
          }}
          count={count}
          stock={stock}
        />
      </Box>

      <Box m={2} sx={{ justifyContent: "center", display: "flex" }}>
        {" "}
        <AddToCart count={count} onProductAdded={onProductAdded} />
      </Box>
      {stock <= 2 ? (
        <Alert severity="warning">
          Solo quedan los últimos {stock} productos
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductCardPrice;
