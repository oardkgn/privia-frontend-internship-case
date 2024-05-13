import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { theme } from "./provider/themeProvider.js";
import { ThemeProvider } from "@emotion/react";
import TableContextProvider from "./context/TableContext.jsx";
import AlertContextProvider from "./context/AlertContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertContextProvider>
      <TableContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </TableContextProvider>
    </AlertContextProvider>
  </React.StrictMode>
);
