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
import PopHover from "../../Animation/PopHover";

function RoomsAvail() {
  return (
    <Fragment>
      <Box sx={{ backgroundColor: "#f0f0f0" }}>
        <ResponsivePadding>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12} lg={6}>
              <Typography variant="h1" gutterBottom>
                Rooms
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
                <Typography sx={{ flex: 1 }}>
                  Personalised to Perfection
                </Typography>
                <Divider
                  sx={{
                    height: ".5px",
                    width: "70%",
                    backgroundColor: "black",
                    flexShrink: 0,
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ paddingTop: "98px" }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={12} lg={4} >
                <PopHover>
                  <img
                    alt="Epitome"
                    style={{ width: "100%", height: "auto" }}
                    src="/Images/Pent2.png"
                  />
                </PopHover>
              </Grid>

              <Grid item xs={12} md={12} lg={4}>
                <PopHover>
                  <img
                    alt="Epitome"
                    style={{ width: "100%", height: "auto" }}
                    src="/Images/Business.png"
                  />
                </PopHover>
              </Grid>

              <Grid item xs={12} md={12} lg={4}>
                <PopHover>
                  <img
                    alt="Epitome"
                    style={{ width: "100%", height: "auto" }}
                    src="/Images/Master.png"
                  />
                </PopHover>
              </Grid>
            </Grid>
          </Box>
        </ResponsivePadding>
      </Box>
    </Fragment>
  );
}

export default RoomsAvail;
