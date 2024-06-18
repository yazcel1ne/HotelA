import React from "react";
import Box from "@mui/material/Box";

const ResponsivePadding = ({ children }) => {
  return (
    <Box
      sx={{
        paddingTop: "98px",
        paddingBottom: "98px",
        paddingLeft: {
          xs: "16px", // Small devices (sm)
          sm: "24px", // Medium devices (md)
          md: "98px", // Large devices (lg)
          lg: "298px", // Extra large devices (default)
        },
        paddingRight: {
          xs: "16px",
          sm: "24px",
          md: "98px",
          lg: "298px",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ResponsivePadding;
