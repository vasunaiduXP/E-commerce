import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/cart";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      user.password !== user.confirmPassword ||
      user.password === "" ||
      user.confirmPassword === ""
    ) {
      setError("Passwords do not match or Invalid!");
      return;
    }

    dispatch(
      registerUser({ username: user.username, password: user.password })
    );
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          p: 4,
          border: "1px solid black",
          borderRadius: 2,
          my: 15,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>

        <TextField
          fullWidth
          label="Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          margin="normal"
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          margin="normal"
        />
        <Box sx={{ display: "flex", justifyContent: "end" }} width="100%">
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>
        </Box>
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
