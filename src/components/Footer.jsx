import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" backgroundColor="#FFF3F4">
      <Stack
        display="flex"
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <Box sx={{ width: "200px", height: "41px" }}>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
          pb="40px"
        >
          @copyright2022
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
