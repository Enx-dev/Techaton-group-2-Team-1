import React from "react";
import {
  Link,
  SimpleGrid,
  Button,
  ButtonGroup,
  GridItem,
  useDisclosure,
  Heading,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import CustomButton from "../../Common/Button/CustomButton";
import Sidemenu from "../Sidemenu/Sidemenu";

const Nav = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const menuRef = React.useRef();

  return (
    <Container maxW="100vw">
      <Container
        maxW="90vw"
        display="flex"
        py="6"
        justifyContent="space-between"
        alignItems="center">
        <Heading color="primary.500">ProTrack</Heading>
        <HamburgerIcon
          w="8"
          h="8"
          color="primary.700"
          cursor="pointer"
          ref={menuRef}
          onClick={onOpen}
          display={["initial", "initial", "none"]}
        />
        <Sidemenu isOpen={isOpen} onClose={onClose} btnRef={menuRef} />
        <SimpleGrid
          display={["none", "none", "grid"]}
          color="primary.600"
          columns={4}
          spacing="6">
          <GridItem as={Link}>Home</GridItem>
          <GridItem as={Link}>Pricing</GridItem>
          <GridItem as={Link}>Features</GridItem>
          <GridItem as={Link}>About us</GridItem>
        </SimpleGrid>
        <ButtonGroup display={["none", "none", "flex"]}>
          <Link href="/signup" _hover={{ textDecoration: "none" }}>
            <Button
              variant="outline"
              outlineColor="primary.400"
              display="grid"
              placeContent="center"
              color="primary.400"
              outlineOffset="-1px">
              Log in
            </Button>{" "}
          </Link>
          <CustomButton text="Get Protrack for free" />
        </ButtonGroup>
      </Container>
    </Container>
  );
};

export default Nav;
