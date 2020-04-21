import React from "react";
import { Link as BassLink } from "rebass";
import styled, { css } from "styled-components";

export const style = css`
  font-family: '${props => props.theme.fonts.defaultFont}', sans-serif;
  color: ${props => props.theme.colors[props.color]};
`;

const StyledLink = styled(BassLink)`
  ${style};
`;

export const Link = ({ to, ...rest }) =>
  to ? <StyledLink {...rest} href={to} /> : <StyledLink {...rest} />;
