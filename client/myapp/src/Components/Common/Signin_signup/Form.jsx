import React from "react";
import { VStack } from "@chakra-ui/react";
const Form = ({ submithandler, children }) => {
  return (
    <VStack
      m={"auto"}
      gap={"5"}
      w={"395px"}
      as={"form"}
      onSubmit={submithandler}>
      {children}
    </VStack>
  );
};

export default Form;
