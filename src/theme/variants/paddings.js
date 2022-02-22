import { css } from "../stitches.config";

function makePaddings() {
  const utils = ["p", "pt", "pr", "pl", "pb", "px", "py"];

  return utils.reduce((prev, curr, index) => {
    const data = [...new Array(13)].map((_, index) => ({
      [curr]: `$${index}`,
    }));
    // @ts-ignore
    prev[curr] = {
      ...data,
    };
    return prev;
  }, {});
}

export const paddingVariants = css({
  variants: makePaddings(),
});
