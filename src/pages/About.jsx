import React from "react";
import { Box, Container, Typography, Grid, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 5 }}>
          About Us
        </Typography>
        <Grid container spacing={2} sx={{ mb: 5 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              At Zenstore, we're dedicated to providing the best online shopping
              experience for our customers. We strive to offer a wide range of
              high-quality products, excellent customer service, and a
              user-friendly website.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact Us
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              www.zensatore.com was founded in 2025 with the goal of creating a
              unique and personalized shopping experience. Our team is
              passionate about delivering exceptional service and building
              long-lasting relationships with our customers.
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h5" align="center" sx={{ mb: 5 }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={2} sx={{ mb: 5 }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              John Doe
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Founder & CEO
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Jane Smith
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Marketing Manager
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Bob Johnson
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Customer Service Manager
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
