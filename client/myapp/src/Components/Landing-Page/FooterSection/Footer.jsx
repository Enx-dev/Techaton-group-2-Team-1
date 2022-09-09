import React from "react";
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
const Footer = () => {
  const linksGroup_1 = ["Home", "About us", "Contact"];
  const linksGroup_2 = ["Designers", "Product Managers", "Freelancers"];
  const linksGroup_3 = ["Help Center", "Privacy Policy", "Terms of service"];
  return (
    <Box
      as="footer"
      mt="2rem"
      bgGradient="linear(to-b, primary.500,primary.700)"
      paddingBlock="3rem"
      color="#F6F6F6">
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "row"]}
        paddingInline={["1rem"]}
        maxWidth="90vw">
        <Box mb="8">
          <Heading>ProTrack</Heading>
        </Box>
        <SimpleGrid columns={[null, 1, 3]} spacing={["5", "5", "20"]}>
          <List>
            <LinkHeading>Company</LinkHeading>
            {linksGroup_1.map((link, i) => (
              <CustomListItem key={i}>{link}</CustomListItem>
            ))}
          </List>
          <List>
            <LinkHeading>Use Cases</LinkHeading>
            {linksGroup_2.map((link, i) => (
              <CustomListItem key={i}>{link}</CustomListItem>
            ))}
          </List>
          <List>
            <LinkHeading>Support</LinkHeading>
            {linksGroup_3.map((link, i) => (
              <CustomListItem key={i}>{link}</CustomListItem>
            ))}
          </List>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

const CustomListItem = ({ children }) => {
  return (
    <ListItem
      cursor="pointer"
      position="relative"
      width="fit-content"
      fontWeight="light"
      _after={{
        content: "''",
        left: "0",
        bottom: "0",
        width: "0",
        height: "10%",
        backgroundColor: "white",
        position: "absolute",
        transition: "all 0.5s ease",
      }}
      _hover={{
        _after: {
          width: "100%",
        },
      }}
      fontSize="16px"
      mb="1">
      {children}
    </ListItem>
  );
};
const LinkHeading = ({ children }) => {
  return (
    <ListItem as="h1" fontWeight="medium" fontSize="24px" mb="2">
      {children}
    </ListItem>
  );
};
export default Footer;
