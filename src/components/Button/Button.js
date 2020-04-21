import styled, { css } from "styled-components";
import { Button as BassButton, Link as BassLink } from "rebass";

const style = css`
  font-family: '${props => props.theme.fonts.defaultFont}', sans-serif;;
  color: ${props => props.theme.colors.light};
  border: 3px solid ${props => props.theme.colors.light};
  padding: 10px 20px;
  font-size: 20px;
  background-color: ${props => props.theme.colors.mainBackground};
  text-transform: uppercase;
  text-decoration: none;
`;

const Button = styled(BassButton)`
  ${style};
`;

const Link = styled(BassLink)`
  ${style}
`;

export { Button, Link };
