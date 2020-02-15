import React, { Component } from "react";
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
  return <Flex flexDirection={["column", "row-reverse"]} my={[48, 0]} alignItems="center">
      <Box width={[1, 1 / 2]} alignSelf={["flex-start", "center"]} justifyContent={["flex-start", "center"]} px={30}>
        <Flex justifyContent="center" flexDirection="column">
          <Heading size={1} color="light" my={0} fontSize={5}>
            MagnoliaJS Conference
          </Heading>
          <Text color="highlight" my={30}>
            Jackson, Mississippi | April 18, 2019
          </Text>

          <Flex justifyContent="center" flexDirection="column">
            <Text color="white" my={30}>
              Thanks for coming!<br />
            </Text>
          </Flex>

          {children}
        </Flex>
      </Box>
      <Box width={[1, 1 / 2]}>
        <Image src={bannerImg} alt="" />
      </Box>
    </Flex>;
}

export default MainBanner;
