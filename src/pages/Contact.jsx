import React from "react";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box>
      <Box sx={{ margin: "50px" }}>
        <Typography variant="h4">Zenstore Contact Page</Typography>
      </Box>

      <Box sx={{ margin: "50px" }}>
        <Typography variant="h5">Contact Information</Typography>
        <Typography variant="body1">Email: www.zenstore.com</Typography>
      </Box>

      <Box sx={{ margin: "50px" }}>
        <Typography variant="h5">Address</Typography>
        <Typography variant="body1">Pune, Maharastra </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
