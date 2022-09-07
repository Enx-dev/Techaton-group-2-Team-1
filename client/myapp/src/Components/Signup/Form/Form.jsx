import React from "react";
import {
  VStack,
  Heading,
  Input,
  Text,
  Flex,
  Link as Links,
  Box,
  Image,
} from "@chakra-ui/react";
import fb from "../../../Asset/Facebook (icon — Colour).svg";
import gog from "../../../Asset/Google (icon — Colour).svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { CustomButton, AuthpageInput, Seperator, AuthForm } from "../../Common";
const Form = () => {
  const validatorSchema = yup.object().shape({
    firstname: yup.string().required("Your firstname is required"),
    lastname: yup.string().required("Your lastname is required"),
    email: yup.string().email("enter a valid email").required(),
    password: yup.string().min(6).max(20).required(),
  });
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
  const navigate = useNavigate();
  const onSubmit = (data) => {
    reset();
    navigate("/login");
  };
  return (
    <AuthForm submithandler={handleSubmit(onSubmit)}>
      <Heading fontSize={"24px"} textAlign="start" alignSelf="baseline">
        Sign up for your account
      </Heading>
      <VStack spacing="1rem" w="100%">
        <AuthpageInput title="First Name" message={errors.firstname?.message}>
          <Input
            type={"text"}
            placeholder={"Enter Firstname"}
            {...register("firstname")}
          />
        </AuthpageInput>
        <AuthpageInput title="Last Name" message={errors.lastname?.message}>
          <Input
            type={"text"}
            placeholder={"Enter Lastname"}
            {...register("lastname")}
          />
        </AuthpageInput>
        <AuthpageInput title="E-mail" message={errors.email?.message}>
          <Input
            type={"email"}
            placeholder={"Enter Email"}
            {...register("email")}
          />
        </AuthpageInput>
        <AuthpageInput title="Password" message={errors.password?.message}>
          <Input
            type={"password"}
            placeholder={"Enter Password"}
            {...register("password")}
          />
        </AuthpageInput>
      </VStack>
      <CustomButton text="Create Account" type="submit" />
      <Seperator />
      <CustomButton
        text="Connect with Google"
        icon={<Image src={gog} w={"20px"} mx={"10px"} />}
      />
      <CustomButton
        text=" Connect with Facebook"
        icon={<Image src={fb} w={"30px"} mx={"10px"} />}
      />
      <VStack fontSize={["10px", "12px"]} textAlign="center">
        <Text>
          By signing up, you confirm that you've read and accepted our
        </Text>
        <Text>
          <Links color={"primary.700"}>Terms of Service</Links> and{" "}
          <Links color={"primary.700"}>Privacy Policy</Links>
        </Text>
      </VStack>
      <Text fontSize="16px">
        Already have an account?{" "}
        <Links color={"primary.700"} href="/signin">
          Sign in
        </Links>
      </Text>
    </AuthForm>
  );
};

export default Form;
