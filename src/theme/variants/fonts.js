import { css } from "../stitches.config";

export const fontVariants = css({
  variants: {
    fw: {
      1: { fw: "$1" },
      2: { fw: "$2" },
      3: { fw: "$3" },
      4: { fw: "$4" },
      5: { fw: "$5" },
      6: { fw: "$6" },
      7: { fw: "$7" },
      8: { fw: "$8" },
      9: { fw: "$9" },
      normal: { fw: "$normal" },
      bold: { fw: "$bold" },
      extraBold: { fw: "$extraBold" },
    },
    ta: {
      center: {
        textAlign: "center",
      },
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
  },
});
