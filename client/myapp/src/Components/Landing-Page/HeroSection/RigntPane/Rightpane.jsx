import React from "react";
import {
  Heading,
  Highlight,
  Box,
  Text,
  InputGroup,
  Input,
  Link,
} from "@chakra-ui/react";
import CustomButton from "../../../Common/Button/CustomButton";

const Rightpane = () => {
  return (
    <Box className="HeroContent" maxW="42rem">
      <Heading
        as="h1"
        fontSize={["28px", "32px", "52px", "64px"]}
        lineHeight="tall"
        textAlign={["center", "center", "revert"]}>
        <Highlight
          query={["Collaborate", "Plan", "Manage"]}
          styles={{ color: "primary.600" }}>
          Protrack helps team to Collaborate, Plan and Manage tasks.
        </Highlight>
      </Heading>
      <Text
        textAlign={["center", "center", "revert"]}
        fontSize={["16px", "16px", "20px", "24px"]}
        fontWeight={["medium", "medium", "semibold"]}>
        Seamlessly manage projects, track task and collaborate with your team
        across multiple projects; all from one tool.
      </Text>
      <InputGroup
        display="flex"
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        gap="2rem"
        mt="1rem"
        paddingInlineEnd={["0", "0", "14"]}>
        <Input
          width={["100%", "100%", "160%"]}
          type="email"
          placeholder="Email"
        />
        <CustomButton
          text={
            <Link w="100%" _hover={{ textDecoration: "none" }} href="/signin">
              Sign in
            </Link>
          }
        />
      </InputGroup>
    </Box>
  );
};

export default Rightpane;
