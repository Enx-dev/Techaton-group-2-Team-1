import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  GridItem,
  SimpleGrid,
  ButtonGroup,
  Button,
  Link,
} from "@chakra-ui/react";
import { CustomButton } from "../../Common";
const Sidemenu = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}>
      <DrawerOverlay display={["initial", "initial", "none"]} />
      <DrawerContent display={["initial", "initial", "none"]}>
        <DrawerCloseButton />
        <DrawerHeader></DrawerHeader>

        <DrawerBody>
          <SimpleGrid
            display={["grid"]}
            color="primary.600"
            fontSize="24px"
            textAlign="center"
            columns={1}
            spacing="6">
            <GridItem as={Link}>Home</GridItem>
            <GridItem as={Link}>Pricing</GridItem>
            <GridItem as={Link}>Features</GridItem>
            <GridItem as={Link}>About us</GridItem>
          </SimpleGrid>
        </DrawerBody>

        <DrawerFooter
          display="flex"
          flexDirection="column"
          gap="1rem"
          alignItems="stretch"
          mb="4rem">
          <Button
            variant="outline"
            outlineColor="primary.400"
            color="primary.400"
            outlineOffset="-1px">
            Log in
          </Button>
          <CustomButton text="Get Protrack for free" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

/*
height: 100px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: stretch;
*/

export default Sidemenu;
