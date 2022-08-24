import React from "react";
import {
  Heading,
  Highlight,
  Box,
  Text,
  InputGroup,
  Input,
  Button,
} from "@chakra-ui/react";
import CustomButton from "../../../Common/Button/CustomButton";
const Rightpane = () => {
  return (
    <Box maxW="42rem">
      <Heading as="h1" fontSize="64px" lineHeight="tall">
        <Highlight
          query={["Collaborate", "Plan", "Manage"]}
          styles={{ color: "primary.600" }}>
          Protrack helps team to Collaborate, Plan and Manage tasks.
        </Highlight>
      </Heading>
      <Text fontSize="24px" fontWeight="semibold">
        Seamlessly manage projects, track task and collaborate with your team
        across multiple projects; all from one tool.
      </Text>
      <InputGroup display="flex" gap="2rem" mt="1rem" paddingInlineEnd="14">
        <Input width="160%" type="email" placeholder="Email" />
        <CustomButton text="Sign In" />
      </InputGroup>
    </Box>
  );
};

export default Rightpane;
