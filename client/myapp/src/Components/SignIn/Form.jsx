import React from "react";
import {
  VStack,
  Heading,
  Input,
  Text,
  Link as Links,
  Image,
} from "@chakra-ui/react";
import fb from "../../Asset/Facebook (icon — Colour).svg";
import gog from "../../Asset/Google (icon — Colour).svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { CustomButton, AuthpageInput, Seperator, AuthForm } from "../Common";
const Form = () => {
  const validatorSchema = yup.object().shape({
    email: yup
      .string()
      .email("enter a valid email")
      .required("Enter your Email"),
    password: yup.string().required("Enter Your password"),
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
  };
  console.log(errors);
  return (
    <AuthForm submithandler={handleSubmit(onSubmit)}>
      <Heading fontSize={"24px"} textAlign="start" alignSelf="baseline">
        Welcome back
      </Heading>
      <Heading
        fontSize={["16px", "20px", "24px"]}
        lineHeight={["24px", "30px", "32px"]}
        textAlign="start"
        alignSelf="baseline">
        Don't have an account?
        <Links href="/signup" color="primary.700">
          Sign Up
        </Links>
      </Heading>
      <VStack spacing="1rem" w="100%">
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
      <CustomButton text="Sign in" type="submit" />
      <Seperator />
      <CustomButton
        text="Connect with Google"
        icon={<Image src={gog} w={"20px"} mx={"10px"} />}
      />
      <CustomButton
        text=" Connect with Facebook"
        icon={<Image src={fb} w={"30px"} mx={"10px"} />}
      />
    </AuthForm>
  );
};

export default Form;
