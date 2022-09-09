import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  Highlight,
} from "@chakra-ui/react";
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
          lineHeight={["24px", "32px", "40px", "60px"]}>
          <Highlight
            query={["collaborate", "Create", "team"]}
            styles={{
              color: "transparent",
              bgClip: "text",
              bgGradient: "linear(to-r, primary.500,primary.700)",
            }}>
            Create task and collaborate with your team effectively.
          </Highlight>
        </Heading>
        <Text mt={"20px"} fontSize="16px" lineHeight="24px" pr="20rem">
          Protrack is a task management app designed to help individual and
          teams work together in one unified workspace.
        </Text>
      </Box>
      <Box w="60vw" maxW="700px" minW="300px" h="fit-content">
        <Image src={create} />
      </Box>
    </Container>
  );
};

export default Create;
