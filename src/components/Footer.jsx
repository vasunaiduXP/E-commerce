import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 2,
        textAlign: "center",
        width: "100%",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography> &copy; 2025 Zenstore</Typography>
    </Box>
  );
}
