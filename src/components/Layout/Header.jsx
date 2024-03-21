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

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import {WbSunny} from "@mui/icons-material";
const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [themeChange, setThemeChange] = useState(false);

    const handleThemeIcon = () => {
        setThemeChange(!themeChange);
    };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" , fontSize: '60px' }}>
        <Divider sx={{ height: 40, margin: '10px 0' ,backgroundColor: 'pink'}} />
      <Typography
        sx={{ flexGrow: 1, my: 2, color: 'antiquewhite', fontSize: '45px',fontWeight: "bold",
            ':hover': {
                color: "pink",
                transform: "translateX(6px)",
                transition: "all 200ms"
            },}}
      >
          Işıl's website
      </Typography>
        <Divider sx={{ height: 40, margin: '10px 0' ,backgroundColor: 'pink'}} />
        <ul className="mobile-navigation">
            <li>
                <NavLink activeClassName="active" to={"/"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/experience"} activeClassName="active">Experience</NavLink>
            </li>
            <li>
                <NavLink to={"/skills"} activeClassName="active">Skills</NavLink>
            </li>
            <li>
                <NavLink to={"/certificates"} activeClassName="active">Certificates</NavLink>
            </li>
            <li>
                <NavLink to={"/projects"} activeClassName="active">Projects</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"} activeClassName="active">Contact</NavLink>
            </li>
        </ul>
    </Box>
  );

    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{bgcolor: "#1A1A19"}}>
            <Toolbar>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  sx={{
                    mr: 2,
                    display: {sm: "none"},
                  }}
                  onClick={handleDrawerToggle}
              >
                <MenuIcon/>
              </IconButton>
              <Typography
                  color={"antiquewhite"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1,fontWeight: "bold",fontSize: "23px" ,
                  ':hover': {
                      color: "pink",
                      transform: "translateX(6px)",
                      transition: "all 200ms"
                  },}}
            >
                  Işıl's website
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <ul className="navigation-menu">
                    <li>
                        <NavLink activeClassName="active" to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={"/experience"}>Experience</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={"/skills"}>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/certificates"} activeClassName="active">Certificates</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={"/projects"}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={"/contact"}>Contact</NavLink>
                    </li>
                    <WbSunny className={`themeIcon ${themeChange ? 'themeChange' : ''}`} onClick={handleThemeIcon}/>
                </ul>

            </Box>
            </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                bgcolor: "#1A1A19",
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
