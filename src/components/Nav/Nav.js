import React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

const List = styled(Flex)`
  list-style-type: none;
`;

export const NavItem = styled.li`
  margin-right: 20px;

  & a,
  & a:hover,
  & a:link,
  & a:visited {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 16px;
  }
`;

export const Nav = ({ children }) => (
  <nav>
    <List as="ul" flexDirection={["column", "row"]} my={[20, 0]} mx={0}>
      {children}
    </List>
  </nav>
);
