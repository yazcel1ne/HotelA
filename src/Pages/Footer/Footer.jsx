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
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  const backgroundImageUrl = "/Images/cta2.png";

  return (
    <Fragment>
      <Box>
        <ResponsivePadding>
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginBottom: "48px",
              }}
            >
              ASTORIA
            </Typography>
            <Divider
              sx={{
                height: ".5px",
                width: "100%",
                backgroundColor: "black",
              }}
            />
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={12} lg={6} marginTop={6}>
              <Box sx={{ display: "flex", gap: "8px" }}>
                <MailOutlineIcon />
                <Typography>astoriahotels@email.com</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6} marginTop={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography sx={{ textAlign: "right" }}>
                  Copyright © Astoria2024. All Rights Reserved
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </ResponsivePadding>
      </Box>
    </Fragment>
  );
};

export default Footer;
