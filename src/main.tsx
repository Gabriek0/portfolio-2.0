import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";
import { theme } from "./styles/theme";

import "./i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SidebarDrawerProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </SidebarDrawerProvider>
  </React.StrictMode>
);
