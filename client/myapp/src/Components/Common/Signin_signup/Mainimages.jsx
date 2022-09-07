import React from "react";
import { Image, Box } from "@chakra-ui/react";
const Mainimages = ({ img }) => {
  return (
    <Box m={"auto"} display={["none", "none", "block"]}>
      <Image src={img} />
    </Box>
  );
};

export default Mainimages;
