import React from "react";

const ThemeContext = React.createContext({
  colorMode: "light",
  setColorMode: () => {},
});

export default ThemeContext;
