import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const HeroFinder = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,

        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "white",

        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
        width: "80%",
        maxWidth: "800px",
        fontFamily: "'Noto Sans', sans-serif", // Apply Noto Sans font
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap: "5px",
          }}
        >
          <CalendarMonthIcon />
          Check In
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap: "5px",
          }}
        >
          <CalendarMonthIcon />
          Check Out
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Person2OutlinedIcon />
          Guests
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Search Input */}
          <TextField
            fullWidth
            placeholder="Search"
            variant="standard" // Removes border
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
              disableUnderline: true, // Remove underline/border
              sx: {
                fontFamily: "'Noto Sans', sans-serif", // Ensure consistent font
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroFinder;
