import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Box, Link, Typography} from "@mui/material";
import {LinkedIn} from "@mui/icons-material";
import "../../styles/FooterStyles.css";
const Footer = () => {
  return (
    <>
      <Box className="main-box">
        <Box className="main-box2">
            <Link href="https://www.instagram.com/isilkefal/" target="_blank" rel="noopener noreferrer" color="inherit">
                <InstagramIcon />
            </Link>
            <Link href="https://twitter.com/isilkefal" target="_blank" rel="noopener noreferrer" color="inherit">
                <TwitterIcon />
            </Link>
            <Link href="https://github.com/lupsi12" target="_blank" rel="noopener noreferrer" color="inherit">
                <GitHubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/isilkefal/" target="_blank" rel="noopener noreferrer" color="inherit">
                <LinkedIn />
            </Link>
        </Box>
          <Typography className="main-box2 h5">
              <p className="main-box2 p">
                  coded with &hearts; by {" "}
                  <a className="main-box2 a" href={"https://www.linkedin.com/in/isilkefal/"} target="_blank" rel="noopener noreferrer">Işıl </a>
              </p>
              <p className="main-box2 p">&copy; 2024</p>
          </Typography>
      </Box>
    </>
  );
};

export default Footer;
