import React from "react";
import { Text as DefaultText } from "rebass";
import styled from "styled-components";

const Text = styled(DefaultText)`
  font-family: ${props => props.theme.fonts.defaultFont}, sans-serif;
  font-weight: 300;
`;

export default function(props) {
  return <Text {...props} />;
}
