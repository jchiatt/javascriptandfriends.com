import React from "react";
import { Box } from '@rebass/grid';

function Sponsor({image, link, name, styles}) {
  return (
    <Box px={4} style={{maxWidth: '320px', ...styles}}>
      <a href={link} target='_blank' rel="noopener noreferrer">
        <img src={image} alt={`${name} logo`} />
      </a>
    </Box>
  );
}
export default Sponsor;
