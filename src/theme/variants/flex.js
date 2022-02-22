import { css } from "../stitches.config";

export const flexVariants = css({
  variants: {
    align_self: {
      between: {
        alignSelf: "space-between",
      },
      around: {
        alignSelf: "space-around",
      },
      center: {
        alignSelf: "center",
      },
      start: {
        alignSelf: "flex-start",
      },
      end: {
        alignSelf: "flex-end",
      },
    },
    justify_self: {
      between: {
        justifySelf: "space-between",
      },
      around: {
        justifySelf: "space-around",
      },
      center: {
        justifySelf: "center",
      },
      start: {
        justifySelf: "flex-start",
      },
      end: {
        justifySelf: "flex-end",
      },
    },
    align: {
      between: {
        alignItems: "space-between",
      },
      around: {
        alignItems: "space-around",
      },
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
    },
    justify: {
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
    },
  },
});
