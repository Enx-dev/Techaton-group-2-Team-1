import React from "react";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import create from "../../../Asset/illustration_Create.svg";

const Create = () => {
  return (
    <Container
      display="flex"
      mt={["5rem", "5rem", "2rem"]}
      flexDirection={["column-reverse", "column-reverse", "row"]}
      alignItems="center"
      paddingInline="0"
      gap="3rem"
      justifyContent={["space-evenly", "space-evenly", "space-between"]}
      maxW="90vw">
      <Box>
        <Heading
          noOfLines={2}
          fontSize={["20px", "24px", "32px", "48px"]}
          lineHeight={["24px", "32px", "40px", "72px"]}>
          Create task and collaborate with your team effectively.
        </Heading>
        <Text mt={"20px"} fontSize="16px" lineHeight="24px">
          Protrack is a task management app designed to help individual and
          teams work together in one unified workspace.
        </Text>
      </Box>
      <Box h="fit-content">
        <Image src={create} />
      </Box>
    </Container>
  );
};

export default Create;
