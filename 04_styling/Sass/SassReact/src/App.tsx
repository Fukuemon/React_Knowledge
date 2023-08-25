import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Sample1 } from "./components/Sample1";
import Buttons from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <Sample1 />
      <Buttons />
    </ChakraProvider>
  );
}

export default App;
