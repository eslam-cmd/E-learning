import React from "react";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        backgroundColor: "#f0f0f0",
        p: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
        Discover over 300 free courses
      </Typography>
      <TextField
        variant="outlined"
        placeholder="What do you want to learn today?"
        sx={{
          width: "100%",
          maxWidth: "600px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
            backgroundColor: "white",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchComponent;
