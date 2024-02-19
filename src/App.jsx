import { useState } from "react";
import styled from "@emotion/styled";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "./App.css";
import { Button, Typography } from "@mui/material";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsOutlinedIcon />}
        variant="contained"
        color="secondary"
      >
        Settings
      </Button>
      <Button
        startIcon={<AddOutlinedIcon />}
        variant="contained"
        color="success"
      >
        Add new Post
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="p">
        It uses h1 style but
      </Typography>
      <BlueButton> My Button</BlueButton>
    </div>
  );
}

export default App;
