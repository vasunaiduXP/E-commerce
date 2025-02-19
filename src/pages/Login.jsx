import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/cart";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [warning, setWarning] = useState("");

  const users = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const validUser = users["users"][user.username].password == user.password;

    if (validUser) {
      dispatch(loginUser(user));
      setWarning("");
      navigate("/home");
    } else {
      setWarning("Invalid Credentials");
    }
  };

  return (
    <Box>
      <Container maxWidth="sm">
        <Box
          sx={{
            my: 15,
            p: 4,
            border: "1px solid black",
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            margin="normal"
          />
          <Box sx={{ display: "flex", justifyContent: "right", mx: 5 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
          <Typography color="error" sx={{ mt: 2 }}>
            {warning}
          </Typography>
          <Box sx={{ m: 2, display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => navigate("/register")}>
              Create Account
            </Button>
            <Button onClick={() => navigate("/forgotpassword")}>
              Forgot Password?
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
