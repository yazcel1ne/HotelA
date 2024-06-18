import { Fragment, React } from "react";
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

function About() {
  return (
    <Fragment>
      <ResponsivePadding>
        <Grid container spacing={6}>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h1" gutterBottom>
              Provisions
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                width: "100%",
                paddingTop: "25px",
              }}
            >
              <Typography sx={{ flex: 1 }}>Our Story to Tell</Typography>
              <Divider
                sx={{
                  height: ".5px",
                  width: "80%",
                  backgroundColor: "black",
                  flexShrink: 0,
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ paddingTop: "98px" }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12} lg={6}>
              <Box sx={{ width: "100%" }}>
                <img
                  alt="Epitome"
                  style={{ width: "100%", height: "auto" }}
                  src="/Images/Perf.png"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box>
                <Typography variant="h1">Epitome of Elegance</Typography>
                <Typography sx={{ marginTop: "48px", marginBottom: "48px" }}>
                  This five-star hotel exudes luxury with its meticulously
                  designed interiors, impeccable service, and unparalleled
                  attention to detail. From opulent suites adorned with plush
                  furnishings to exquisite dining experiences curated by
                  world-class chefs, every moment spent here embodies
                  sophistication and refinement.
                </Typography>

                <List>
                  <ListItem sx={{ gap: "24px" }}>
                    <CheckIcon />
                    <ListItemText primary="Luxurious accommodations with meticulously designed interiors" />
                  </ListItem>
                  <ListItem sx={{ gap: "24px" }}>
                    <CheckIcon />
                    <ListItemText primary="Impeccable service delivered with attention to every detail" />
                  </ListItem>
                  <ListItem sx={{ gap: "24px" }}>
                    <CheckIcon />
                    <ListItemText primary="Exquisite dining experiences curated by world-class chefs" />
                  </ListItem>
                </List>
                <Button sx={{ marginTop: "48px" }} variant="contained">
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* 
PERFECTION_____________------- */}

        <Box sx={{ paddingTop: "98px" }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12} lg={6}>
              <Box>
                <Typography variant="h1">Personalised to Perfection</Typography>
                <Typography sx={{ marginTop: "48px", marginBottom: "48px" }}>
                  This five-star hotel exudes luxury with its meticulously
                  designed interiors, impeccable service, and unparalleled
                  attention to detail. From opulent suites adorned with plush
                  furnishings to exquisite dining experiences curated by
                  world-class chefs, every moment spent here embodies
                  sophistication and refinement.
                </Typography>

                <List>
                  <ListItem sx={{ gap: "24px" }}>
                    <CheckIcon />
                    <ListItemText primary="Luxurious accommodations with meticulously designed interiors" />
                  </ListItem>
                  <ListItem sx={{ gap: "24px" }}>
                    <CheckIcon />
                    <ListItemText primary="Impeccable service delivered with attention to every detail" />
                  </ListItem>
                  <ListItem sx={{ gap: "24px" }}>
                    <CheckIcon />
                    <ListItemText primary="Exquisite dining experiences curated by world-class chefs" />
                  </ListItem>
                </List>
                <Button sx={{ marginTop: "48px" }} variant="contained">
                  Learn More
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box sx={{ width: "100%" }}>
                <img
                  alt="Epitome"
                  style={{ width: "100%", height: "auto" }}
                  src="/Images/Epitome.png"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ResponsivePadding>
    </Fragment>
  );
}

export default About;
