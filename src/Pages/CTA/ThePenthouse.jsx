import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import ResponsivePadding from "../../Components/ResponsivePadding";
import CheckIcon from "@mui/icons-material/Check";

const ThePenthouse = () => {
  const backgroundImageUrl = "/Images/AstoriaHero.png";

  return (
    <Fragment>
      <Box
        sx={{
          height: "80vh",
          backgroundImage: `url('/Images/Penthouse.png')`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ResponsivePadding>
          <Typography variant="h1" color="white">Astoria's The Penthouse</Typography>

         

          <Button sx={{ marginTop: "48px" }} variant="contained">
            Learn More
          </Button>
        </ResponsivePadding>
      </Box>
    </Fragment>
  );
};

export default ThePenthouse;
