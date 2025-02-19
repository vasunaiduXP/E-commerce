import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Box,
  Typography,
  FormGroup,
} from "@mui/material";
import { useState } from "react";
import AllCollections from "../components/AllCollections";

const Collections = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    Men: false,
    Women: false,
    Kids: false,
    Topwear: false,
    Bottomwear: false,
    Winterwear: false,
  });

  const handleChange = (event) => {
    setSelectedOptions({
      ...selectedOptions,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Grid container spacing={2} sx={{ height: "80vh" }}>
      <Grid item xs={3} md={3} sx={{ overflowY: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            my: 5,
            position: "sticky",
          }}
        >
          <Typography variant="h5"> Filters </Typography>
          <Box>
            <Box
              sx={{
                my: 2,
                padding: "20px",
                border: "2px solid black",
                borderRadius: "10px",
              }}
            >
              <FormControl component="fieldset">
                <FormLabel component="legend">CATEGORES</FormLabel>

                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions.Women}
                        onChange={handleChange}
                        name="Women"
                      />
                    }
                    label="Women"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions.Men}
                        onChange={handleChange}
                        name="Men"
                      />
                    }
                    label="Men"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions.Kids}
                        onChange={handleChange}
                        name="Kids"
                      />
                    }
                    label="Kids"
                  />
                </FormGroup>
              </FormControl>
            </Box>
            <Box
              sx={{
                my: 2,
                padding: "20px",
                border: "2px solid black",
                borderRadius: "10px",
              }}
            >
              <FormControl component="fieldset">
                <FormLabel component="legend">TYPE</FormLabel>

                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions.Topwear}
                        onChange={handleChange}
                        name="Topwear"
                      />
                    }
                    label="Topwear"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions.Bottomwear}
                        onChange={handleChange}
                        name="Bottomwear"
                      />
                    }
                    label="Bottomwear"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions.Winterwear}
                        onChange={handleChange}
                        name="Winterwear"
                      />
                    }
                    label="Winterwear"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={9} md={9}>
        <Box
          sx={{
            border: "5px solid white",
            overflow: "auto",
            height: "80vh",
          }}
        >
          <AllCollections selectedOptions={selectedOptions} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Collections;
