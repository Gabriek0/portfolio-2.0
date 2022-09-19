import { extendTheme } from "@chakra-ui/react";

export const border = {
  gradientPink: "linear-gradient(132.33deg, #D24074 -0.67%, #6518B4 102.54%) 1",
  gradientBlue: "linear-gradient(51.06deg, #9358F7 0.87%, #10D7E2 97.48%) 1",
};

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
    background: {
      50: "#151515",
      100: "#121212",
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `Inter, sans-serif`,
  },
});
