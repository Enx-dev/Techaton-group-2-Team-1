import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
const Sepertor = () => {
  return (
    <Flex
      display={"flex"}
      w="100%"
      alignItems={"center"}
      flexDirection={"row"}
      gap="1rem">
      <Box h={"1px"} bg={"black"} flex={"1"} />
      <Box>
        <Text>or</Text>
      </Box>
      <Box h={"1px"} bg={"black"} flex={"1"} />
    </Flex>
  );
};

export default Sepertor;
