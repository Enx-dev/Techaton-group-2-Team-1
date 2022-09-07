import React from "react";
import fes from "../Asset/Frame 210.svg";
import Form from "../Components/Signup/Form/Form";
import { AuthpageWrapper, AuthpageImage } from "../Components/Common";
const Signup = () => {
  return (
    <AuthpageWrapper>
      <AuthpageImage img={fes} />
      <Form />
    </AuthpageWrapper>
  );
};

export default Signup;
