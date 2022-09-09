import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  Highlight,
} from "@chakra-ui/react";
import share from "../../../Asset/illustration_share.svg";

const Share = () => {
  return (
    <Container
      display="flex"
      mt={["5rem", "5rem", "2rem"]}
      mb="3rem"
      flexDirection={["column-reverse", "column-reverse", "row-reverse"]}
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
            query={["Share", "communicate", "team"]}
            styles={{
              color: "transparent",
              bgClip: "text",
              bgGradient: "linear(to-r, primary.500,primary.700)",
            }}>
            Share and communicate with your team online
          </Highlight>
        </Heading>
        <Text mt={"20px"} fontSize="16px" lineHeight="24px">
          Share your to-do list and project online for free with your team mate,
          collaborate and communicate together..
        </Text>
      </Box>
      <Box h="fit-content" w="60vw" maxW="700px" minW="300px">
        <Image src={share} />
      </Box>
    </Container>
  );
};

export default Share;
