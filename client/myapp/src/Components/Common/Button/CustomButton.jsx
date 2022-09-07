import React from "react";
import { Button } from "@chakra-ui/react";
const CustomButton = ({ text, icon, action, type, link }) => {
  return (
    <Button
      leftIcon={icon}
      type={type}
      width="100%"
      borderRadius="2px"
      _hover={{ bg: "primary.400" }}
      bg="primary.700"
      color="white">
      {text}
    </Button>
  );
};

export default CustomButton;
