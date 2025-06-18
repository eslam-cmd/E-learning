import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  Button,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  School,
  Book,
  People,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GradientDivider from "./divider";

const theme = createTheme({
  typography: {
    fontFamily: "'Tajawal', sans-serif",
  },
});

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  return (
    <ThemeProvider theme={theme}>
      <GradientDivider />
      <Box
        component="footer"
        sx={{
          minHeight: "100vh",
          width: "100%",
          bgcolor: "#2c3e50",
          color: "white",
          py: 8,
          px: isMobile ? 3 : isTablet ? 6 : 10,
        }}
      >
        <Box sx={{ mb: 6, textAlign: isMobile ? "center" : "left" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            <School sx={{ verticalAlign: "middle", mr: 1, fontSize: "2rem" }} />
            E-Learning Academy
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "500px", opacity: 0.9 }}>
            We provide the best interactive educational curricula for school and
            university students, assisting you in your educational journey from
            the beginning to professionalism.
          </Typography>
        </Box>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)", mb: 6 }} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              <Book sx={{ mr: 1 }} />
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                href="#"
                color="inherit"
                sx={{ mb: 1.5, "&:hover": { color: "#3498db" } }}
              >
                Available Courses
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ mb: 1.5, "&:hover": { color: "#3498db" } }}
              >
                Study Plans
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ mb: 1.5, "&:hover": { color: "#3498db" } }}
              >
                Teachers and Instructors
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ mb: 1.5, "&:hover": { color: "#3498db" } }}
              >
                Scholarships
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              <People sx={{ mr: 1 }} />
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Email sx={{ mr: 1.5, color: "#3498db" }} />
              <Typography>hdayaaslam34@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone sx={{ mr: 1.5, color: "#3498db" }} />
              <Typography>+963 58 359 136</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOn sx={{ mr: 1.5, color: "#3498db" }} />
              <Typography>Syria, Aleppo</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              <Book sx={{ mr: 1 }} />
              Resources
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" color="inherit" sx={{ mb: 1.5 }}>
                Digital Library
              </Link>
              <Link href="#" color="inherit" sx={{ mb: 1.5 }}>
                Educational Videos
              </Link>
              <Link href="#" color="inherit" sx={{ mb: 1.5 }}>
                Test Models
              </Link>
              <Link href="#" color="inherit" sx={{ mb: 1.5 }}>
                Research and Studies
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                sx={{
                  bgcolor: "#3b5998",
                  color: "white",
                  "&:hover": { bgcolor: "#344e86" },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "#1da1f2",
                  color: "white",
                  "&:hover": { bgcolor: "#1991db" },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "#e1306c",
                  color: "white",
                  "&:hover": { bgcolor: "#c13584" },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "#0077b5",
                  color: "white",
                  "&:hover": { bgcolor: "#006699" },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
              Subscribe to Our Newsletter
            </Typography>
            <Box sx={{ display: "flex" }}>
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  padding: "10px",
                  border: "none",
                  borderRadius: "4px 0 0 4px",
                  flexGrow: 1,
                  fontSize: "1rem",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#3498db",
                  borderRadius: "0 4px 4px 0",
                  px: 3,
                  "&:hover": { bgcolor: "#2980b9" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            textAlign: "center",
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Future Academy. All rights reserved.
          </Typography>
          <Box
            sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}
          >
            <Link href="#" color="inherit" variant="body2">
              Terms of Service
            </Link>
            <Link href="#" color="inherit" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" variant="body2">
              FAQ
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
