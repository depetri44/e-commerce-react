import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "./ItemCount";
import AddToCart from "./AddToCart";
//import useAccountant from "./components/useAccountant";
// https://unsplash.com/es/t/food-drink
// https://www.freepik.es/search?format=search&query=comida&type=photo
// https://storyset.com/food
//https://www.youtube.com/watch?v=s_Txhh-clVk&t=999s
export default function CardDescription({ increase, decrease, count }) {
  return (
    <Card sx={{ maxWidth: 345, ml: 5, mr: 5, mt: 5, mb: 5 }}>
      <CardMedia sx={{ height: 140 }} image={""} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ justifyContent: "center", display: "flex" }}
        >
          Lizard
        </Typography>
        <Typography
          variant="body2"
          //color="text.secondary"
          sx={{ justifyContent: "center", display: "flex" }}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", display: "flex" }}>
        <ItemCount increase={increase} decrease={decrease} count={count} />
        <AddToCart count={count} />
      </CardActions>
    </Card>
  );
}
