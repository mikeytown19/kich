import type * as Stitches from '@stitches/react';
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


console.log(stitches)

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


export type VariantProps<T> = Stitches.VariantProps<T>;
export type CSS = Stitches.CSS<typeof config>;
export type StitchesTheme = typeof theme;
// export const createTheme = ({ type, theme, className }) => {
//   if (!type) {
//     throw new Error("Theme type is required");
//   }
//   return createThemeBase(
//     className || `${type}-theme`,
//     deepMerge(type === "dark" ? darkTheme : lightTheme, theme)
//   );
// };
