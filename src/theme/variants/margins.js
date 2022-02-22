import { css } from "../stitches.config";

function makeMargins() {
  const utils = ["m", "mt", "mr", "ml", "mb", "mx", "my"];

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

export const marginVariants = css({
  variants: makeMargins(),
});
