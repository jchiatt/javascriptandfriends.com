import React from "react";
import styled from "styled-components";
import bannerImg from "./homepage-image.png";
import { Flex, Box } from "@rebass/grid";
import Heading from "../Heading";
import Text from "../Text";

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

function MainBanner({ children }) {
  return <Flex flexDirection={["column-reverse"]} my={[48, 0]} alignItems="center">
      <Box width={[1, 1 / 2]} alignSelf={["center"]} justifyContent={["center"]} px={30}>
        <Flex justifyContent="center" flexDirection="column">
          <Heading size={1} color="light" my={0} fontSize={[5, 6]} textAlign={["center"]}>
            See you next year!
          </Heading>
          <Text color="highlight" my={10} textAlign={["center"]}>
            Jackson, Mississippi
          </Text>

          {children}
        </Flex>
      </Box>
      <Box width={[1, 1 / 2]}>
        <Image src={bannerImg} alt="" />
      </Box>
    </Flex>;
}

export default MainBanner;
