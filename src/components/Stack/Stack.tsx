import React from "react";
import { styled } from "../../theme/stitches.config";
import { flexVariants, paddingVariants } from "../../theme/variants";

const Wrapper = styled(
  "div",
  {
    display: "flex",
    flexDirection: "column",
    maxWidth: "$4",
    // height: 'min-content',
    gap: "$4",
    "@bp2": {
      py: "$3",
      px: "$1",
      wrap: "wrap",
    },
    variants: {
      reverse: {
        true: {
          flexDirection: "row-reverse",
        },
      },

      w_full: {
        true: {
          width: "100%",
        },
      },
      fifty_fifty: {
        true: {
          ".block, .stack": {
            width: "100%",
          },
        },
      },
      column: {
        true: {
          flexDirection: "column",
          ".block, .stack": {
            m: "$1",
          },
        },
      },
      row: {
        true: {
          flexDirection: "row",
          ".block, .stack": {
            m: "$1",
          },
        },
      },
    },
    defaultVariants: {
      // @ts-ignore
      p: "0",
    },
  },
  flexVariants,
  paddingVariants
);

// @ts-ignore
const Stack = ({ children, row, column, reverse, ...props }) => {
  const fifty_fifty = children?.length ? true : false;
  return (
    <Wrapper
      row={row}
      reverse={reverse}
      column={column}
      {...props}
      fifty_fifty={fifty_fifty}
    >
      {children}
    </Wrapper>
  );
};
export default Stack;
