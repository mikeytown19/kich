import { globalCss, getCssText } from "./stitches.config";

const globalStyles = globalCss({
  "html,body": {
    margin: "0",
    padding: "0",
    fontFamily: "inter",
  },
  "*, *:before, *:after": {
    boxSizing: "border-box",
    textRendering: "geometricPrecision",
    WebkitTapHighlightColor: "transparent",
  },
  "h1, h2, h3": {
    mt: "0",
    color: "$headings",
  },
  h1: {
    fontWeight: "700",
    fontSize: "$10",
    lineHeight: "$10",
    mb: "$4",
    "@bp2": {
      fontWeight: "700",
      fontSize: "$8",
      lineHeight: "$9",
    },
  },
  h2: {
    fontWeight: "700",
    fontSize: "$8",
    lineHeight: "$9",
    mb: "$4",
    "@bp2": {
      fontWeight: "700",
      fontSize: "$7",
      lineHeight: "$8",
    },
  },
  h3: {
    fontWeight: "700",
    fontSize: "$7",
    lineHeight: "$7",
    mb: "$4",
    "@bp2": {
      fontWeight: "700",
      fontSize: "$6",
      lineHeight: "$8",
    },
  },
  h4: {
    fontWeight: "500",
    fontSize: "$5",
    lineHeight: "$5",
    mb: "$3",
  },
  h5: {
    fontWeight: "500",
    fontSize: "$4",
    lineHeight: "$4",
    mb: "$3",
  },
  h6: {
    fontWeight: "500",
    fontSize: "$3",
    lineHeight: "$3",
    mb: "$2",
  },
  p: {
    fontSize: "$2",
    lineHeight: "$6",
    mb: "$2",
    // color: "$gray11",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  ul: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  li: {
    padding: "0",
    margin: "0",
  },
  "ul,ol": {
    paddingLeft: "0",
    marginLeft: "0",
  },
  "ul li,ol li": {
    paddingLeft: "0",
    marginLeft: "0",
  },
  "ul, li, p, a ": {
    color: "$text",
  },
});

export default globalStyles;
