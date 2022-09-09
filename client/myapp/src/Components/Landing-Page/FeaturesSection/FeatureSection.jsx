import React from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import MainImg from "./FeaturesImg/MainIng";
import Features from "./Features/Features";
const FeaturesSection = () => {
  return (
    <Container maxW="90vw" mt="4rem">
      <Heading
        textAlign="center"
        fontSize={["20px", "24px", "32px", "48px"]}
        lineHeight={["24px", "32px", "40px", "60px"]}>
        Key Features of ProTrack
      </Heading>
      <Box
        mt="5rem"
        display="flex"
        flexDirection={["column", "column", "row"]}
        gap="4rem"
        justifyContent="space-between">
        <MainImg />
        <Features />
      </Box>
    </Container>
  );
};

export default FeaturesSection;
