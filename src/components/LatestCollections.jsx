import React from "react";
import { products } from "../assets/assets";
import ZenCard from "../SharedComponents/ZenCard";
import { Box, Grid, Typography } from "@mui/material";
export default function LatestCollections() {
  const productz = products.slice(0, 10);
  return (
    <Box sx={{ padding: "20px" }}>
      <Box
        sx={{
          textAlign: "center",
          padding: "20px",
          my: "20px",
        }}
      >
        <Typography variant="h4" component="div">
          {" "}
          Latest Collections{" "}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {productz.map((product) => (
          <Grid item xs={6} md={3} key={product._id}>
            <ZenCard
              CardType={"LatestCollections"}
              key={product._id}
              title={product.name}
              image={product.image}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
