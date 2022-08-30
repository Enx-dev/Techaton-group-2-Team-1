import React from "react";
import {
  Flex,
  FormControl,
  Input,
  VStack,
  FormLabel,
  Heading,
  Button,
  Link as Links,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import fb from "../../Asset/Facebook (icon — Colour).svg";
import gog from "../../Asset/Google (icon — Colour).svg";
import fes from "../../Asset/Frame 210.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const validatorSchema = yup.object().shape({
    firstname: yup.string().required("Your firstname is required"),
    lastname: yup.string().required("Your lastname is required"),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validatorSchema),
    reValidateMode: "onChange",
    criteriaMode: "all",
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    reset();
    navigate("/login");
  };

  return (
    <Flex w={"100%"} h={"90vh"}>
      <Box
        w={"90%"}
        m={"auto"}
        display={"flex"}
        border={"2px solid #ccc"}
        borderRadius={"5px"}
        mt={"30px"}>
        <Box m={"auto"}>
          <Image src={fes} />
        </Box>
        <VStack
          m={"auto"}
          mt={"60px"}
          gap={"5"}
          as={"form"}
          onSubmit={handleSubmit(onSubmit)}>
          <Heading fontSize={"15px"}>Sign up for your account</Heading>
          <FormControl w={"300px"}>
            <FormLabel>First name</FormLabel>
            <Input
              type={"text"}
              placeholder={"Enter Firstname"}
              {...register("firstname")}
            />
            <Text color={"red"}>{errors.firstname?.message}</Text>
          </FormControl>
          <FormControl w={"300px"}>
            <FormLabel>Last name</FormLabel>
            <Input
              type={"text"}
              placeholder={"Enter Lastname"}
              {...register("lastname")}
            />
            <Text color={"red"}>{errors.lastname?.message}</Text>
          </FormControl>
          <FormControl w={"300px"}>
            <FormLabel>E-mail</FormLabel>
            <Input
              type={"email"}
              placeholder={"Enter Email"}
              {...register("email")}
            />
            <Text color={"red"}>{errors.email?.message}</Text>
          </FormControl>
          <FormControl w={"300px"}>
            <FormLabel>Password</FormLabel>
            <Input
              type={"password"}
              placeholder={"Enter Password"}
              {...register("password")}
            />
            <Text color={"red"}>{errors.password?.message}</Text>
          </FormControl>

          <Button type={"submit"} w={"300px"} colorScheme={"blue"}>
            Create account
          </Button>

          <Flex display={"flex"} alignItems={"center"} flexDirection={"row"}>
            <Box h={"70px"} bg={"black"} flex={"1"} />
            <Box>
              <Text>or</Text>
            </Box>
            <Box h={"70px"} bg={"black"} flex={"1"} />
          </Flex>
          <Button type={"submit"} w={"300px"} colorScheme={"blue"}>
            <Image src={gog} w={"20px"} mx={"10px"} />
            Connect with Google
          </Button>
          <Button type={"submit"} w={"300px"} colorScheme={"blue"}>
            <Image src={fb} w={"30px"} mx={"10px"} />
            Connect with Facebook
          </Button>

          <Text noOfLines={"2"}>
            By signing up, you canfirm that you've read and accepted our{" "}
            <Links color={"blue"}>Terms of Service</Links> and{" "}
            <Links color={"blue"}>Privacy Policy</Links>
          </Text>

          <Text>
            Already have an account? <Links color={"blue"}>Sign in</Links>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Signup;
