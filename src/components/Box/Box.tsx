import React from "react";
import { styled } from "../../theme/stitches.config";
import { paddingVariants, flexVariants } from "../../theme/variants";

const Wrapper = styled(
  "div",
  {
    boxSizing: "border-box",
    variants: {
      w_full: {
        true: {
          width: "100%",
        },
      },
    },
  },
  paddingVariants,
  flexVariants
);

function Box({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default Box;
