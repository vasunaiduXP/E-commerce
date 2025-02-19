import React from "react";
import { Box, Typography } from "@mui/material";

export default function PlaceOrder() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      height="75vh"
    >
      <Typography variant="h2">Order Placed</Typography>
    </Box>
  );
}
