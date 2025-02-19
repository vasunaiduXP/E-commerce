import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function CartItem({ item }) {
  return (
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
          <Box>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: 100, height: 100 }}
            />
          </Box>
        </Grid>

        <Grid item xs={4} md={4}>
          <Box>{item.name}</Box>
        </Grid>
        <Grid item xs={4} md={4}>
          <Box> Rs {item.price}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
