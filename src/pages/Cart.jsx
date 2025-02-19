import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import CartItem from "../components/CartItem";
import { products } from "../assets/assets";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  let total = 0;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  useEffect(() => {
    handleCart();
  }, []);

  const handleCart = () => {
    const uname = users.currentUser;
    console.log(users);
    const temp = users.users[uname]?.cart.map((item) => item.product_id);
    const items = products.filter((i) => {
      return temp?.includes(i._id);
    });

    setCartItems(items);
  };

  const handlePayment = async () => {
    navigate("/place-order");
  };

  return (
    <Box sx={{ height: "80vh", overflow: "auto" }}>
      <Box
        sx={{
          textAlign: "center",
          padding: "20px",
          my: "20px",
        }}
      >
        <Typography variant="h4" component="h1">
          My Cart
        </Typography>
      </Box>
      {cartItems.length !== 0 ? (
        <Box>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{
                boxSizing: "border-box",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={4} md={4}>
                <Typography variant="body2" component="div">
                  Image
                </Typography>
              </Grid>
              <Grid item xs={4} md={4}>
                <Typography variant="body2" component="div">
                  Title
                </Typography>
              </Grid>
              <Grid item xs={4} md={4}>
                <Typography variant="body2" component="div">
                  Price
                </Typography>
              </Grid>
            </Grid>
            <hr />
            {cartItems.map((item, index) => {
              total += item.price;
              return (
                <>
                  <CartItem key={index} item={item} />
                  <hr />
                </>
              );
            })}
            <Grid
              container
              spacing={2}
              sx={{
                boxSizing: "border-box",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* ---------------------- */}
              <Grid item xs={4} md={4}>
                <Typography variant="body2" component="div"></Typography>
              </Grid>
              <Grid item xs={4} md={4}>
                <Typography variant="body2" component="div">
                  Delivary Charges
                </Typography>
              </Grid>
              <Grid item xs={4} md={4}>
                <Typography variant="body2" component="div">
                  Rs 99
                </Typography>
              </Grid>

              {/* ------------------------------ */}

              <Grid item xs={4} md={4}>
                <Typography variant="body2" component="div"></Typography>
              </Grid>
              <Grid item xs={4} md={4}>
                <Typography variant="body2" component="div">
                  Total Cost
                </Typography>
              </Grid>
              <Grid item xs={4} md={4}>
                <Typography variant="body2" component="div">
                  Rs {total + 99}
                </Typography>
              </Grid>
              {/* --------------------- */}
            </Grid>
            <hr />
          </Box>

          <Box sx={{ textAlign: "center", my: 3 }}>
            <Button onClick={handlePayment} variant="contained">
              <Typography variant="body2" component="div">
                Proceed to Checkout
              </Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2">Cart is Empty</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
