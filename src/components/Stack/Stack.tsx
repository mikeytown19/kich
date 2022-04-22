import React from "react";
import { styled, VariantProps, CSS } from "../../theme/stitches.config";
import { flexVariants, paddingVariants } from "../../theme/variants";

import {
  Wrap,
  Display,
  Justify,
  Direction,
  AlignItems,
  AlignContent
} from '../../utils/prop-types';


const Wrapper = styled(
  "div",
  {
    display: "flex",
    flexDirection: "column",
    maxWidth: "$4",
    gap: "$4",
    "@bp2": {
      py: "$3",
      px: "$1",
      flexWrap: "wrap",
    },
    variants: {
    },
  },
  flexVariants,
  paddingVariants
);


const defaultProps = {
  wrap: 'wrap' as Wrap,
  as: 'div' as keyof JSX.IntrinsicElements,
  display: 'block' as Display
};


interface Props {
  wrap?: Wrap;
  display?: Display;
  justify?: Justify;
  direction?: Direction;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  as?: keyof JSX.IntrinsicElements;
  css?: CSS;
}

type StackProps = Props & typeof defaultProps;


const Stack: React.FC<StackProps> = ({
  children,
   display,
   wrap,
   justify,
   direction,
   alignItems,
   alignContent,
   css,
   ...props }) => {

  return (
    <Wrapper
      css={{
        alignItems,
        alignContent,
        flexWrap: wrap,
        display: display,
        justifyContent: justify,
        flexDirection: direction,
        ...(css as any)}}
      {...props}
    >
      {children}
    </Wrapper>
  );
};
export default Stack;