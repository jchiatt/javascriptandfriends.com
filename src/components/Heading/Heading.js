import React from "react";
import Text from "../Text";

export default function({ as, size, children, ...rest }) {
  if (!as && (!Number.isInteger(size) || !(size < 7 && size > 0))) {
    throw new Error("size must be a valid number between 1 and 6");
  }

  const tag = size ? `h${size}` : as;

  return (
    <Text {...rest} as={tag}>
      {children}
    </Text>
  );
}
