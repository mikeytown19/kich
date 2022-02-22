import { css } from "../stitches.config";
import { primaryColors } from "../primary_theme";
const colorList = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
  "tomato",
  "red",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "grass",
  "brown",
  "orange",
  "sky",
  "mint",
  "lime",
  "yellow",
  "amber",
  "gold",
  "bronze",
  "whiteA",
  "blackA",
];

// @ts-ignore
function transformPrimary(pcolors, key) {
  const val = Object.entries(pcolors).reduce((prev, [k, v]) => {
    // @ts-ignore
    prev[k] = {
      [key]: v,
    };

    return prev;
  }, {});

  return val;
}

function makeBgColors(number = 2) {
  return colorList.reduce((prev, curr) => {
    // @ts-ignore
    prev[curr] = {
      bg: `$${curr}${number}`,
    };
    return prev;
  }, {});
}

function makeButtonBGColors(number = 9) {
  return colorList.reduce((prev, curr) => {
    // @ts-ignore
    prev[curr] = {
      bg: `$${curr}${number}`,
      transition: "background-color .3s",
      "&:hover": {
        bg: `$${curr}${number + 1}`,
      },
    };
    return prev;
  }, {});
}

function makeColors(number = 11) {
  return colorList.reduce((prev, curr) => {
    // @ts-ignore
    prev[curr] = {
      color: `$${curr}${number}`,
    };
    return prev;
  }, {});
}

export const colorVariants = css({
  variants: {
    color: {
      ...makeColors(10),
    },
  },
});

export const bgColorVariants = css({
  variants: {
    bg: {
      ...makeBgColors(),
    },
  },
});

// transformPrimary(primaryColors, "bg");

export const buttonBackgroundColorsVariants = css({
  variants: {
    bg: {
      ...makeButtonBGColors(),
      ...transformPrimary(primaryColors, "bg"),
    },
  },
});
