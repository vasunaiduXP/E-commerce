import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "../store/cart";

const ForgotPassword = () => {
  const [passwords, setPasswords] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user);

  const handleReset = (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    let validUsers = users["users"][passwords.username];

    if (validUsers) {
      dispatch(
        updateUsers({
          currentUser: passwords.username,
          oldPassword: passwords.oldPassword,
          newPassword: passwords.newPassword,
        })
      );
      setError("");
      navigate("/");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: 10 }}>
      <Box sx={{ p: 4, border: "1px solid black", borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Forgot Password
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="username"
          onChange={(e) =>
            setPasswords({ ...passwords, username: e.target.value })
          }
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="Old Password"
          onChange={(e) =>
            setPasswords({ ...passwords, oldPassword: e.target.value })
          }
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="New Password"
          onChange={(e) =>
            setPasswords({ ...passwords, newPassword: e.target.value })
          }
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          onChange={(e) =>
            setPasswords({ ...passwords, confirmPassword: e.target.value })
          }
          margin="normal"
        />
        <Box sx={{ display: "flex", justifyContent: "right", mx: 5 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleReset}
          >
            Submit
          </Button>
        </Box>
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
