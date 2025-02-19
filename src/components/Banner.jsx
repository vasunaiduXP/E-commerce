import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              border: "5px solid primary",
              backgroundColor: "rgb(195, 233, 235)",
            }}
          >
            <Box
              height="300px"
              width="100%"
              sx={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                flex: 1,
                padding: "10px",
              }}
            >
              <Typography variant="h1" fontFamily="Roboto" color="primary">
                Latest Trends
              </Typography>

              <Box>
                <Typography variant="h4" fontFamily="Roboto" color="primary">
                  Shop Now
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ border: "5px solid rgb(20, 241, 204)" }}
          >
            <img
              src="https://img.freepik.com/premium-vector/vector-illustration-new-arrival-sticker-tag-banner-speech-bubble_545399-2114.jpg?semt=ais_hybrid"
              alt="banner"
              height="300px"
              width="auto"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
