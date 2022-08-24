import React from "react";
import Rightpane from "./RigntPane/Rightpane";
import HeroImg from "./ImgPane/HeroImg";
import { Container } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Container
      mt="2rem"
      display="flex"
      flexDirection="row-reverse"
      alignItems="center"
      justifyContent="space-between"
      maxW="90vw">
      <HeroImg />
      <Rightpane />
    </Container>
  );
};

export default Hero;
