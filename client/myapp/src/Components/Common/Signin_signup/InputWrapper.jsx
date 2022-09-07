import React from "react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
const InputWrapper = ({ children, title, message }) => {
  // console.log(message);
  return (
    <FormControl w="100%" isRequired>
      <FormLabel>{title}</FormLabel>
      {children}
      <FormErrorMessage>{message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputWrapper;
