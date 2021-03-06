import { styled } from "../../theme/stitches.config";
import {
  paddingVariants,
  marginVariants,
  fontVariants,
  buttonBackgroundColorsVariants,
} from "../../theme/variants";

const Button = styled(
  "button",
  {
    // appearance: "none",
    border: "none",
    display: "inline-block",
    fontWeight: "$5",
    lineHeight: "$4",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    userSelect: "none",
    color: "$whiteA12",
    padding: "$2 $4",
    fontSize: "$2",
    borderRadius: "$2",
    mt: "$2",
    variants: {
      align: {
        center: {
          alignSelf: "center",
        },
        end: {
          alignSelf: "flex-end",
        },
        start: {
          alignSelf: "flex-start",
        },
      },
      width: {
        full: {
          width: "100%",
        },
        default: {
          width: "max-content",
        },
      },
    },
    defaultVariants: {
      // @ts-ignore
      bg: "indigo",
      width: "default",
    },
  },
  paddingVariants,
  marginVariants,
  fontVariants,
  buttonBackgroundColorsVariants
);

export default Button;
