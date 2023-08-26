import type { FC, PropsWithChildren } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme";
const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ChakraProvider theme={theme}>
    <Router>{children}</Router>
  </ChakraProvider>
);

export default Providers;
