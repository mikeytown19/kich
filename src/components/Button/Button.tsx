import React from "react";
import { styled } from "../../theme/stitches.config";
import {
  paddingVariants,
  marginVariants,
  fontVariants,
  buttonBackgroundColorsVariants,
} from "../../theme/variants";

import { ThemeContext } from "../ThemeProvider/ThemeContext";

const DarkModeToggle = () => {
  // Don't render anything at compile time. Deferring rendering until we
  // know which theme to use on the client avoids incorrect initial
  // state being displayed.
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  if (!colorMode) {
    return null;
  }

  const nextColor = colorMode !== "dark" ? "dark" : "light";

  return (
    <input
      type="checkbox"
      checked={colorMode !== "dark"}
      onChange={() => setColorMode(nextColor)}
    />
  );
};

const ButtonWrapper = styled(
  "button",
  {
    appearance: "none",
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
    color: "$slate4",
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

// @ts-ignore
const Button = ({ icon, children, ...props }) => {
  return (
    // @ts-ignore
    <ButtonWrapper {...props}>
      <DarkModeToggle />
      {icon && (
        // @ts-ignore
        <span>{icon}</span>
      )}

      {children}
    </ButtonWrapper>
  );
};

export default Button;
