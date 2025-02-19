import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Paper,
  IconButton,
  Icon,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { userAddToCart } from "../store/cart";

export default function ZenCard({ prod, CardType, title, image, price }) {
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(userAddToCart({ product_id: product._id, quantity: 1 }));
  };

  return (
    <Paper>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          height: 400,
        }}
      >
        <CardMedia
          sx={{ height: 300, width: 250 }}
          image={image}
          title={title}
        />
        <CardContent>
          <Box height={60} sx={{ textAlign: "center" }}>
            <Typography variant="body2">{title}</Typography>
            <Box height={5} />
            <Typography
              variant="h6"
              sx={{ color: "text.secondary", fontWeight: 700 }}
            >
              Rs {price}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          {CardType === "AllCollections" ? (
            <>
              <IconButton size="small" onClick={() => handleAddToCart(prod)}>
                <AddShoppingCartIcon />
              </IconButton>
              <Button size="small">Learn More</Button>{" "}
            </>
          ) : (
            <>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>{" "}
            </>
          )}
        </CardActions>
      </Card>
    </Paper>
  );
}
