import React from "react";
import featuresImg from "../../../../Asset/illustration_Features.svg";
import { Image, Container } from "@chakra-ui/react";
const MainIng = () => {
  return (
    <Image
      display={["none", "none", "revert"]}
      w={["360px", "360px", "360px", "530px"]}
      h="520px"
      src={featuresImg}
    />
  );
};

export default MainIng;
