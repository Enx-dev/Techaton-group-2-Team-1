import React from "react";
import {
  Box,
  Link,
  SimpleGrid,
  Image,
  Button,
  ButtonGroup,
  GridItem,
} from "@chakra-ui/react";
import CustomButton from "../../Common/Button/CustomButton";
const Nav = () => {
  return (
    <Box
      display="flex"
      py="6"
      px="12"
      justifyContent="space-between"
      alignItems="center"
      bg="white">
      <Image />
      <SimpleGrid color="primary.600" columns={4} spacing="6">
        <GridItem as={Link}>Home</GridItem>
        <GridItem as={Link}>Pricing</GridItem>
        <GridItem as={Link}>Features</GridItem>
        <GridItem as={Link}>About us</GridItem>
      </SimpleGrid>
      <ButtonGroup>
        <Button
          variant="outline"
          outlineColor="primary.400"
          color="primary.400"
          outlineOffset="-1px">
          Log in
        </Button>
        <CustomButton text="Get Protrack for free" />
      </ButtonGroup>
    </Box>
  );
};

export default Nav;