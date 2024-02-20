import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { theme } from "./theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
