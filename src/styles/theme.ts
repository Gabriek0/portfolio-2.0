import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blue: {
      100: "#00D2DF",
    },
    gray: {
      100: "#c4c4c4",
      200: "#1F2029",
    },
    white: "#ffff",
    background: "#121212",
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `Inter, sans-serif`,
  },
});
