import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import create from "../../../Asset/illustration_Create.svg";

const Create = () => {
  return (
    <Flex display={"flex"} mx={"50px"} w={"100%"} h={"100%"}>
      <Box>
        <Heading noOfLines={2} mt={"50px"}>
          Create task and collaborate with your team effectively.
        </Heading>
        <Text mt={"20px"} noOfLines={2} ml={"10px"}>
          Protrack is a task management app designed to help individual and
          teams work together in one unified workspace.
        </Text>
      </Box>
      <Box m={"auto"} mt={"30px"} mr={"30px"}>
        <Image src={create} />
      </Box>
    </Flex>
  );
};

export default Create;
