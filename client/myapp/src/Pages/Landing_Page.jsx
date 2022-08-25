import React from "react";
import {
  CreateSection,
  FeaturesSection,
  FooterSection,
  HeroSection,
  NavSection,
  ShareSection,
} from "../Components/Landing-Page";
import { Container } from "@chakra-ui/react";

const Landing_Page = () => {
  return (
    <Container maxW="100vw" paddingInline="0">
      <NavSection />
      <HeroSection />
      <FeaturesSection />
      <CreateSection />
      <ShareSection />
      <FooterSection />
    </Container>
  );
};

export default Landing_Page;
