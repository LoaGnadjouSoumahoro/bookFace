import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import { Pets } from "@mui/icons-material";

const StyledToolbaar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbaar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          WEB PREMIUM
          <Pets sx={{ display: { xs: "bock", sm: "none" } }} />
        </Typography>
      </StyledToolbaar>
    </AppBar>
  );
};

export default Navbar;
