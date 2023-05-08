import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Box
      display="flex"
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <Box sx={{ width: "48px", height: "48px", margin: "0px 20px" }}>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Link>
      <Box
        display="flex"
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/">
          <Typography
            sx={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            主页
          </Typography>
        </Link>

        <a href="#exercises" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            锻炼
          </Typography>
        </a>
      </Box>
    </Box>
  );
};

export default Navbar;
