import React from "react";
import "../style.css";
import { Button, Flex, VStack } from "@chakra-ui/react";
const Buttons = () => {
  return (
    <VStack p={8} spacing={8}>
      <button className="btn changecolor">ChangeColor</button>
      <button className="btn float">Shaddown</button>
      <Button w={150}>chakra</Button>
    </VStack>
  );
};

export default Buttons;
