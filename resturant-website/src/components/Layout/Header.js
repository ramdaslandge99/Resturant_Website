import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../printstyle/PrintNav.css";
import Logo from "../../images/logo.svg";

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);

  // handle menu click
  const handleDrawerToggle = () => {
    setOpenMobile(!openMobile);
  };

  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1 }}
      >
        <img src={Logo} alt="logo" height={"70"} width={"200"} />
      </Typography>
      <Divider />
      <ul className="mobile-menu">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={"70"} width={"250"} />
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="Navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={openMobile}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "220px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
