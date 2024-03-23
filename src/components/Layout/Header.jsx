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
    const openPDF = () => {
        window.open(require("/Users/user/Desktop/frontend/src/assets/cv.pdf"), '_blank');
    };


    const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [themeChange, setThemeChange] = useState(false);
    const handleThemeIcon = () => {
        setThemeChange(!themeChange);
        if (!themeChange) {
            // Light tema
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        } else {
            // Dark tema
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        }
    };


  const drawer = (
    <Box onClick={handleDrawerToggle} className="drawer-box">
        <Divider className="drawer-divider" />
      <Typography className="drawer-thypography">
          Işıl's website
      </Typography>
        <Divider className="drawer-divider" />
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
            <li>
                <a onClick={openPDF}>Resume</a>
            </li>
            <WbSunny className="themeIcon" onClick={handleThemeIcon}/>
        </ul>
    </Box>
  );

    return (
        <>
            <Box>
                <AppBar component={"nav"} className="appBar" sx={{ bgcolor: "#1A1A19" }}>
            <Toolbar>
              <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
              >
                <MenuIcon className="appBar-menuIcon"/>
              </IconButton>
              <Typography className="appBar-thypography">
                  Işıl's website
            </Typography>
            <Box>
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
                    <li>
                        <a onClick={openPDF}>Resume</a>
                    </li>
                    <WbSunny className="themeIcon" onClick={handleThemeIcon}/>
                </ul>

            </Box>
            </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer className="drawer"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
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
