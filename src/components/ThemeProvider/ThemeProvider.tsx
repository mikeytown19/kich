import React from "react";
import globalStyles from "../../theme/globalStyles";
const ThemeProvider = ({ children, theme }) => {
  globalStyles();
  return <>{children}</>;
};

export default ThemeProvider;
