import { createStitches } from "@stitches/react";
// import deepMerge from "../utils/deepMerge";
import commonTheme from "./common";
// import lightTheme from "./light-theme";

import { themeDarkColors } from "./theme_colors";

const stitches = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    shadows: {},
    colors: {
      ...commonTheme.theme.colors,
    },
  },
});

export const createThemeBase = stitches.createTheme;
export const styled = stitches.styled;
export const css = stitches.css;
export const globalCss = stitches.globalCss;
export const keyframes = stitches.keyframes;
export const getCssText = stitches.getCssText;
export const theme = stitches.theme;
export const config = stitches.config;

export const darkTheme = createThemeBase("dark", {
  colors: {
    ...themeDarkColors,
  },
});

// export const createTheme = ({ type, theme, className }) => {
//   if (!type) {
//     throw new Error("Theme type is required");
//   }
//   return createThemeBase(
//     className || `${type}-theme`,
//     deepMerge(type === "dark" ? darkTheme : lightTheme, theme)
//   );
// };
