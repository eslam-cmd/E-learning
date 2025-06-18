import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Tajawal', Arial, sans-serif",
  },
});

const Foter = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Start learning for free now{" "}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mt: 1,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: 800,
          }}
        >
          Learn and practice school subjects according to the national
          curricula.{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          height: { xs: "250px", md: "30vh" },
          minHeight: { xs: "300px", md: "350px" },
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: 3,
          my: 4,
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Students in a classroom"
          loading="lazy"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            filter: "brightness(0.9)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(63, 81, 181, 0.4)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
            px: 3,
            maxWidth: "800px",
            backdropFilter: "blur(2px)",
            willChange: "transform, opacity",
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              fontWeight: 800,
              mb: 2,
              textShadow: "0 3px 6px rgba(0,0,0,0.4)",
              lineHeight: 1.3,
            }}
          >
            Our dear students{" "}
          </Typography>

          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontWeight: 600,
              mb: 4,
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              lineHeight: 1.5,
            }}
          >
            Learn with fun.. Progress with confidence.. Achieve your dreams!{" "}
          </Typography>

          <Button
            variant="contained"
            size="large"
            aria-label="Join the educational platform"
            sx={{
              px: 6,
              py: 2,
              fontSize: "1.1rem",
              borderRadius: "50px",
              fontWeight: 700,
              bgcolor: "#FFD700",
              color: "#2A4365",
              "&:hover": {
                bgcolor: "#FFC000",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            Join us now{" "}
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Foter;
