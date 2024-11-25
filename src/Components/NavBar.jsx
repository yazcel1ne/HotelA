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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        
        paddingBottom: "10px",
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
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black", // Make the logo black
            }}
          >
            Astoria
          </Typography>
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                sx={{ color: "black" }} // Make the menu icon black
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
                <MenuItem
                  onClick={() => {
                    scrollToSection("hero-section");
                    handleClose();
                  }}
                  sx={{ color: "black" }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("rooms-section");
                    handleClose();
                  }}
                  sx={{ color: "black" }}
                >
                  Rooms
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("amenities-section");
                    handleClose();
                  }}
                  sx={{ color: "black" }}
                >
                  Amenities
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("faq-section");
                    handleClose();
                  }}
                  sx={{ color: "black" }}
                >
                  FAQ
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <Button
                onClick={() => scrollToSection("hero-section")}
                sx={{ color: "black" }}
              >
                Home
              </Button>
              <Button
                onClick={() => scrollToSection("rooms-section")}
                sx={{ color: "black" }}
              >
                Rooms
              </Button>
              <Button
                onClick={() => scrollToSection("amenities-section")}
                sx={{ color: "black" }}
              >
                Amenities
              </Button>
              <Button
                onClick={() => scrollToSection("faq-section")}
                sx={{ color: "black" }}
              >
                FAQ
              </Button>
              <Button
                sx={{
                  marginLeft: "24px",
                  backgroundColor: "black",
                  color: "white",
                }}
                variant="contained"
              >
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
