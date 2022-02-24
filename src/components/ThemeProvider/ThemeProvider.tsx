import React from "react";
import globalStyles from "../../theme/globalStyles";
import { darkTheme } from "../../theme/stitches.config";
import { ThemeContext } from "./ThemeContext";
globalStyles();

const ThemeProvider = ({ children, theme }) => {
  const themes = {
    light: "light",
    dark: darkTheme.className,
  };

  const [colorMode, rawSetColorMode] = React.useState("light");

  React.useEffect(() => {
    const root = document.documentElement;
    const initialColorMode = root.classList.contains(themes.dark)
      ? "dark"
      : "light";
    rawSetColorMode(initialColorMode);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue = "dark") {
      document.documentElement.classList.remove(themes[colorMode]);
      document.documentElement.classList.add(themes[newValue]);
      localStorage.setItem("kich-color-modes", newValue);
      rawSetColorMode("dark");
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
