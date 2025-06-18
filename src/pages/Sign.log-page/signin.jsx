import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  CssBaseline,
  Paper,
  IconButton
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", email, password);
    navigate("/dashboard");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ 
          mt: 8, 
          p: 4,
          position: "relative"
        }}>
          <IconButton 
            sx={{ 
              position: "absolute",
              left: 16,
              top: 16
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBack />
          </IconButton>

          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
              Sign In
            </Typography>

            <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mb: 2 }}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;