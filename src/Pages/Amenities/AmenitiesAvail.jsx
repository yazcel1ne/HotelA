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


const AmenitiesAvail=()=> {
  return (
    <Fragment>
      <ResponsivePadding>
        <Grid container spacing={6}>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h1" gutterBottom>
              Amenities
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
            <Grid item xs={12} md={12} lg={6}>
              <PopHover>
                <img
                  alt="Club"
                  style={{ width: "100%", height: "auto" }}
                  src="/Images/NightClub.png"
                />
              </PopHover>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <PopHover>
                <img
                  alt="Gourmet"
                  style={{ width: "100%", height: "auto" }}
                  src="/Images/Gourmet.png"
                />
              </PopHover>
            </Grid>
          </Grid>
        </Box>

				<Box sx={{ paddingTop: "48px" }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12} lg={6}>
              <PopHover>
                <img
                  alt="Epitome"
                  style={{ width: "100%", height: "auto" }}
                  src="/Images/Gym.png"
                />
              </PopHover>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <PopHover>
                <img
                  alt="Epitome"
                  style={{ width: "100%", height: "auto" }}
                  src="/Images/Pool.png"
                />
              </PopHover>
            </Grid>
          </Grid>
        </Box>
      </ResponsivePadding>
    </Fragment>
  );
}

export default AmenitiesAvail;
