import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "yellow.50",
        color: "gray.700",
      },
    },
  },
});
export default theme;
