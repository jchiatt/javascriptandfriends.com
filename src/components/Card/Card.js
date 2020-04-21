import { Card as BassCard } from "rebass";

import styled from "styled-components";

const Card = styled(BassCard)`
  background-color: ${props => props.theme.colors.cardColor};
  padding: 2rem;
`;

export default Card;
