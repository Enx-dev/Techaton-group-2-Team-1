import React from "react";
import { Flex } from "@chakra-ui/react";
const Wrapper = ({ children }) => {
  return (
    <Flex w={"100%"} alignItems="center" gap="2rem" padding="2rem">
      {children}
    </Flex>
  );
};

export default Wrapper;
