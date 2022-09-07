import React from "react";
import img from "../Asset/sign_in.svg";
import Form from "../Components/SignIn/Form";
import { AuthpageWrapper, AuthpageImage } from "../Components/Common";
const SignIn_Page = () => {
  return (
    <AuthpageWrapper>
      <AuthpageImage img={img} />
      <Form />
    </AuthpageWrapper>
  );
};

export default SignIn_Page;
