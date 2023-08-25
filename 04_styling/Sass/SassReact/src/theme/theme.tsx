import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "yellow.100",
        color: "gray.800",
      },
    },
  },
});
export default theme;
