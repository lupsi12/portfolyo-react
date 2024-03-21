import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Box, Link, Typography} from "@mui/material";
import {LinkedIn} from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "antiquewhite", p: 1 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "pink",
              transform: "translateX(6px)",
              transition: "all 200ms",
            },
          }}
        >
            <Link href="https://www.instagram.com/isilkefal/"  color="inherit">
                <InstagramIcon />
            </Link>
            <Link href="https://twitter.com/isilkefal" color="inherit">
                <TwitterIcon />
            </Link>
            <Link href="https://github.com/lupsi12" color="inherit">
                <GitHubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/isilkefal/" color="inherit">
                <LinkedIn />
            </Link>
        </Box>
          <Typography
              variant="h5"
              sx={{
                  "@media (max-width:600px)": {
                      fontSize: "1rem",
                  },
              }}
          >
              <p>
                  coded with &hearts; by {" "}
                  <a style={{color: "antiquewhite", textDecoration: "none"}} href={"https://www.linkedin.com/in/isilkefal/"}>Işıl </a>
              </p>
              <p>&copy; 2024</p>
          </Typography>
      </Box>
    </>
  );
};

export default Footer;
