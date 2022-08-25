import React from "react";
import { Box, Flex, List, ListItem, SimpleGrid } from "@chakra-ui/react";
const Footer = () => {
  const linksGroup_1 = ["Home", "About us", "Contact"];
  const linksGroup_2 = ["Designers", "Product Managers", "Freelancers"];
  const linksGroup_3 = ["Help Center", "Privacy Policy", "Terms of service"];
  return (
    <Box as="footer" bg="primary.700" paddingBlock="3rem" color="#F6F6F6">
      <Flex justifyContent="space-between" maxWidth="90vw">
        <Box></Box>
        <SimpleGrid columns={3} spacing="20">
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
    <ListItem fontSize="16px" mb="1">
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
