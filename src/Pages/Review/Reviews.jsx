import { Fragment, React } from "react";
import {
  Grid,
  Typography,
  Box,
  Divider,
  Card,
  CardActions,
  CardContent,
  Button,
  Avatar,
} from "@mui/material";
import ResponsivePadding from "../../Components/ResponsivePadding";
import CheckIcon from "@mui/icons-material/Check";

function Reviews() {
  return (
    <Fragment>
      <Box sx={{ backgroundColor: '#f0f0f0' }}>
      <ResponsivePadding >
        <Grid container spacing={6}>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h1" gutterBottom>
              Reviews
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
               What Our Custmers Say
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

        <Box sx={{ paddingTop: "48px" }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12} lg={6}>
              <Card
                sx={{
                  minWidth: 275,
                  borderRadius: "12px",
                  padding: "48px",
                  boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: "48px",
                    }}
                  >
                    <img
                      src="/Images/quote.png"
                      alt="Epitome"
                      style={{ height: "auto" }}
                    />
                  </Box>
                  <Box sx={{ marginBottom: "48px" }}>
                    <img
                      src="/Images/Stars.png"
                      alt="Epitome"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Box>
                  <Typography sx={{ marginBottom: "48px" }}>
                    "I noticed significant improvement in my skin tone and
                    texture after using the Brightening Serum for a month. My
                    acne scars have faded and my skin looks healthier and
                    radiant. It's made with natural ingredients and is now a
                    staple in my skincare routine."
                  </Typography>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography sx={{ paddingTop: "24px" }}>
                    Anne Collins
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Card
                sx={{
                  minWidth: 275,
                  borderRadius: "12px",
                  padding: "48px",
                  boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)", // Add box-shadow here
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: "48px",
               
                    }}
                  >
                    <img
                      src="/Images/quote.png"
                      alt="Epitome"
                      style={{ height: "auto" }}
                    />
                  </Box>
                  <Box sx={{ marginBottom: "48px" }}>
                    <img
                      src="/Images/Stars.png"
                      alt="Epitome"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Box>
                  <Typography sx={{ marginBottom: "48px" }}>
                    "I noticed significant improvement in my skin tone and
                    texture after using the Brightening Serum for a month. My
                    acne scars have faded and my skin looks healthier and
                    radiant. It's made with natural ingredients and is now a
                    staple in my skincare routine."
                  </Typography>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography sx={{ paddingTop: "24px" }}>
                    Remy Sharpe
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </ResponsivePadding>
      </Box>
    </Fragment>
  );
}

export default Reviews;
