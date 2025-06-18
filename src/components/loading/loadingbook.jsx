import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { keyframes } from "@emotion/react";

const bookFloat = keyframes`
  0%, 100% { transform: translateY(0) rotateY(0deg); }
  50% { transform: translateY(-20px) rotateY(10deg); }
`;

const pageTurn = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(-180deg); }
`;

const LoadingBook = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
        p: 3,
        perspective: "1200px",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50vh",
          background:
            "linear-gradient(to bottom, rgba(63,81,181,0.2) 0%, transparent 100%)",
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "180px",
          height: "240px",
          transformStyle: "preserve-3d",
          animation: `${bookFloat} 3s infinite ease-in-out`,
          mb: 6,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(145deg, #3f51b5 0%, #5c6bc0 100%)",
            borderRadius: "2px 8px 8px 2px",
            boxShadow: "15px 10px 30px rgba(0,0,0,0.2)",
            transform: "translateZ(15px)",
            borderLeft: "4px solid #1a237e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          <Box sx={{ transform: "rotate(90deg)", textAlign: "center" }}>
            E-Learning Academy
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "20px",
            height: "100%",
            background: "linear-gradient(to right, #1a237e 0%, #3949ab 100%)",
            transform: "rotateY(90deg) translateX(10px)",
            boxShadow: "5px 0 10px rgba(0,0,0,0.2)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "#f5f5f5",
            borderRadius: "8px 2px 2px 8px",
            transform: "rotateY(180deg) translateZ(15px)",
            boxShadow: "-15px 10px 30px rgba(0,0,0,0.1)",
            borderRight: "4px solid #e0e0e0",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "96%",
            height: "98%",
            background: "#fff",
            borderRadius: "1px 6px 6px 1px",
            transform: "translateZ(-10px)",
            boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)",
          }}
        >
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: "50%",
                height: "100%",
                right: 0,
                background: "#fff",
                transformOrigin: "left center",
                animation: `${pageTurn} 3s infinite ${i * 0.5}s ease-in-out`,
                boxShadow: "5px 0 15px rgba(0,0,0,0.1)",
                borderLeft: "1px solid #eee",
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "30%",
            height: "50%",
            background:
              "linear-gradient(45deg, rgba(255,255,255,0.3) 0%, transparent 50%)",
            borderRadius: "50%",
            filter: "blur(5px)",
            transform: "translateZ(20px)",
          }}
        />
      </Box>
      <Typography
        variant="h5"
        sx={{
          mt: 2,
          color: "text.primary",
          fontWeight: "medium",
          letterSpacing: "1px",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -8,
            left: "25%",
            width: "50%",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #3f51b5, transparent)",
          },
        }}
      >
        Loding Content{" "}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mt: 1,
          color: "text.secondary",
          "&::after": {
            content: '"."',
            animation: "pulse 1.5s infinite steps(4)",
            display: "inline-block",
            width: "1em",
            textAlign: "left",
          },
          "@keyframes pulse": {
            "0%, 100%": { content: '"."' },
            "33%": { content: '".."' },
            "66%": { content: '"..."' },
          },
        }}
      />
    </Box>
  );
};

export default LoadingBook;
