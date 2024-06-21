import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ResponsivePadding from "./ResponsivePadding";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        paddingTop: "24pxx",
        paddingBottom: "24px",
        paddingLeft: {
          xs: "16px",
          sm: "24px",
          md: "98px",
          lg: "298px",
        },
        paddingRight: {
          xs: "16px",
          sm: "24px",
          md: "98px",
          lg: "298px",
        },
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Astoria
          </Typography>
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Rooms</MenuItem>
                <MenuItem onClick={handleClose}>Amenities</MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Rooms</Button>
              <Button color="inherit">Amenities</Button>
              <Button sx={{ marginLeft: "24px" }} variant="contained">
                  CONTACT US
                </Button>
            </div>
          )}
           
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
