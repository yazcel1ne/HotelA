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

const ComeStay = () => {
  const backgroundImageUrl = "/Images/cta2.png";

  return (
    <Fragment>
      <Box
        sx={{
          height: "50vh",
          backgroundImage: `url('/Images/cta2.png')`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ResponsivePadding>
          <Box
            sx={{
              display: "flez",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" color="white">
              Come and Stay With Us{" "}
            </Typography>
          </Box>
          <Typography
            color="white"
            sx={{
              display: "flez",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "48px",
            }}
          >
            Contact us for more information
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "48px",
            }}
          >
            <Button variant="contained">Contact Us</Button>
          </Box>
        </ResponsivePadding>
      </Box>
    </Fragment>
  );
};

export default ComeStay;
