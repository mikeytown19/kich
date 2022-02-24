import { themes } from "@storybook/theming";

import ThemeProvider from "../src/components/ThemeProvider";

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "black" },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
