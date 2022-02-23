import React from "react";
import { styled } from "../../theme/stitches.config";
import {
  paddingVariants,
  flexVariants,
  bgColorVariants,
} from "../../theme/variants";


const Wrapper = styled(
  "section",
  {
    position: "relative",
    overflow: "visible",
    height: "min-content",
    boxSizing: "border-box",
    display: "flex",
    marginInline: "auto",
    "@bp3": {
      p: "$8",
    },
    "@bp2": {
      p: "$6",
    },
    "@bp1": {
      py: "$4",
      px: "$2",
    },

    variants: {},
    defaultVariants: {
      justify: "center",
    },
  },
  paddingVariants,
  flexVariants,
  bgColorVariants
);



function Section({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Section;

